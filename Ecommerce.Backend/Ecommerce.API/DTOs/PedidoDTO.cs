﻿using Ecommerce.Dominio.Entities;

namespace Ecommerce.API.DTOs
{
    public class PedidoDTO
    {
        public long UsuarioId { get; set; }
        public List<Produto> Produtos { get; set; }
    }
}
