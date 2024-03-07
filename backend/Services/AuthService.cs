using Fire_Kitchen.Models.Domain;
using Fire_Kitchen.Models.DTO;
using Fire_Kitchen.Repositories;
using Fire_Kitchen.Utility;

namespace Fire_Kitchen.Services
{
    public class AuthService : IAuthService
    {
        private readonly IAuthRepository _authRepository;
        private readonly ResponseDTO _response;
        private readonly LoginResponseDTO _loginResponse;
        private readonly IJwtGenerator _jwtGenerator;

        public AuthService(IAuthRepository authRepository, IJwtGenerator jwtGenerator)
        {
            _authRepository = authRepository;
            _jwtGenerator = jwtGenerator;
            _response = new();
            _loginResponse = new();
        }
        public async Task<LoginResponseDTO> Login(LoginRequestDTO loginRequestDTO)
        {
            var loginRequest = new LoginRequest() { 
                Email = loginRequestDTO.Email,
                Password = loginRequestDTO.Password,
            };

            var loginUser = await _authRepository.LoginAsync(loginRequest);
            if(loginUser is null)
            {
                _loginResponse.User = null;
                _loginResponse.Token = "";
                _loginResponse.IsError = true;
                _loginResponse.Message = "Login failed";
                return _loginResponse;
            }

            if(loginUser.Id is null)
            {
                _loginResponse.IsError = true;
                _loginResponse.Message = "Wrong Password";
                return _loginResponse;
            }

            UserDTO user = new()
            {
                Id = loginUser.Id,
                Email = loginUser.Email,
                FirstName = loginUser.FirstName,
                LastName = loginUser.LastName,
            };

            var token = _jwtGenerator.GenerateToken(user);

            LoginResponseDTO response = new()
            {
                User = user,
                Token = token,
                IsError = false,
                Message = "Successfully logged in!"
            };

            CurrentUser.Id = loginUser.Id;
            CurrentUser.Email = loginUser.Email;
            CurrentUser.FirstName = loginUser.FirstName;
            CurrentUser.LastName = loginUser.LastName;

            return response;
        }

        public async Task<ResponseDTO> Register(RegisterRequestDTO registerRequestDTO)
        {
            var registerRequest = new RegisterRequest()
            {
                Email = registerRequestDTO.Email,
                FirstName = registerRequestDTO.FirstName,
                LastName = registerRequestDTO.LastName,
                Password = registerRequestDTO.Password,
            };

            var registerData = await _authRepository.RegisterAsync(registerRequest);

            if(registerData.IsError == true)
            {
                _response.Data = null;
                _response.Error = true;
                _response.Message = registerData.Message;
                return _response;
            }

            UserDTO user = new() {
                Id = registerData.User.Id,
                FirstName = registerData.User.FirstName,
                LastName = registerData.User.LastName,
                Email = registerData.User.Email,
            };
            _response.Data = user;
            _response.Message = "Successfully registered!";
            return _response;
        }
    }
}
