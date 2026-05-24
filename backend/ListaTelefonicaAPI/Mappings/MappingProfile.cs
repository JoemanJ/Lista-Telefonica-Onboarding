using AutoMapper;
using ListaTelefonicaAPI.Models;
using ListaTelefonicaAPI.Models.DTOs;

namespace ListaTelefonicaAPI.Mappings
/// <summary>
/// Perfil de mapeamento AutoMapper
/// Responsabilidade: Converter Entities em DTOs e vice-versa
/// Benefício: Evita expor a estrutura interna das entidades e facilita manutenção
/// </summary>
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            // Mapeamento de Contato para ContatoDto
            CreateMap<Contato, ContatoDTO>().ReverseMap();

            // Mapeamento de CriarContatoDto para Contato
            CreateMap<CriarContatoDTO, Contato>();

            // Mapeamento de AtualizarContatoDto para Contato
            CreateMap<AtualizarContatoDTO, Contato>();
        }
    }
}
