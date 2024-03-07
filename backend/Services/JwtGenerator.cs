using Fire_Kitchen.Models.Domain;
using Fire_Kitchen.Models.DTO;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Fire_Kitchen.Services
{
    public class JwtGenerator : IJwtGenerator
    {
        private readonly JwtOptions _jwtOptions;
        public JwtGenerator(IOptions<JwtOptions> jwtOptions)
        {
            _jwtOptions = jwtOptions.Value;
        }
        public string GenerateToken(UserDTO userDTO)
        {
            var tokenHandler = new JwtSecurityTokenHandler();

            var secret = Encoding.UTF8.GetBytes(_jwtOptions.Secret);

            var claims = new List<Claim> { 
                new Claim(JwtRegisteredClaimNames.Email, userDTO.Email),
                new Claim(JwtRegisteredClaimNames.Sub, userDTO.Id),
            };

            var tokenDescriptor = new SecurityTokenDescriptor { 
                Audience = _jwtOptions.Audience,
                Issuer = _jwtOptions.Issuer,
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddMinutes(60),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(secret),SecurityAlgorithms.HmacSha256Signature),
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);

            return tokenHandler.WriteToken(token);
        }
    }
}
