using Fire_Kitchen.Data;
using Fire_Kitchen.Models.Domain;
using Microsoft.AspNetCore.Identity;

namespace Fire_Kitchen.Repositories
{
    public class AuthRepository : IAuthRepository
    {
        private readonly AppAuthDbContext _db;
        private readonly UserManager<AppUser> _userManager;
        private readonly RegisterResponse _registerResponse;

        public AuthRepository(AppAuthDbContext db, UserManager<AppUser> userManager)
        {
            _db = db;
            _userManager = userManager;
            _registerResponse = new ();
        }
        public async Task<User> LoginAsync(LoginRequest loginRequest)
        {
            var user = _db.AppUsers.FirstOrDefault(user =>  user.Email.ToLower() == loginRequest.Email.ToLower());

            if (user is null)
            {
                return null;
            }

            bool isValid = await _userManager.CheckPasswordAsync(user, loginRequest.Password);

            if (!isValid)
            {
                return new User();
            }

            User loginUser = new()
            {
                Id = user.Id,
                Email = user.Email,
                FirstName = user.FirstName,
                LastName = user.LastName,
            };

            return loginUser;

        }

        public async Task<RegisterResponse> RegisterAsync(RegisterRequest registerRequest)
        {
            if(registerRequest.Password.Length < 8)
            {
                _registerResponse.IsError = true;
                _registerResponse.Message = "Password must be atleast 8 characters";
                _registerResponse.User = null;
                return _registerResponse;
            }
            AppUser user = new()
            {
                FirstName = registerRequest.FirstName,
                LastName = registerRequest.LastName,
                Email = registerRequest.Email,
                NormalizedEmail = registerRequest.Email.ToUpper(),
                UserName = registerRequest.Email,
            };
            var result = await _userManager.CreateAsync(user, registerRequest.Password);
            if (result.Succeeded)
            {
                var createdUser = _db.AppUsers.FirstOrDefault(user => user.UserName == registerRequest.Email);
                User userModel = new()
                {
                    Id = createdUser.Id,
                    FirstName = createdUser.FirstName,
                    LastName = createdUser.LastName,
                    Email = createdUser.Email,
                };
                _registerResponse.User = userModel;
                return _registerResponse;
            }
            var errorList = result.Errors.ToList();
            
            _registerResponse.IsError = true;
            _registerResponse.Message = errorList[0].Description;
            return _registerResponse;
        }
    }
}
