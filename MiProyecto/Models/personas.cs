//------------------------------------------------------------------------------
// <auto-generated>
//     Este código se generó a partir de una plantilla.
//
//     Los cambios manuales en este archivo pueden causar un comportamiento inesperado de la aplicación.
//     Los cambios manuales en este archivo se sobrescribirán si se regenera el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace MiProyecto.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class personas
    {
        public int id { get; set; }
        public string nombre { get; set; }
        public string apellido { get; set; }
        public int indentifiacion { get; set; }
        public string Email { get; set; }
        public int id_identificacion { get; set; }
        public System.DateTime feche_create { get; set; }
        public string id_identidicacion { get; set; }
        public string nombre_apellido { get; set; }
    
        public virtual tipoIdentificacion tipoIdentificacion { get; set; }
    }
}
