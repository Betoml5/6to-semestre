// Hacer un automata que me valide el correo de forma completa, puede aceptar cualquier nombre de dominio siempre y cuando el dominio sea uno existente(.com/.edu./.org etc) y siga el formato correcto
// 	mi.correo_es_de@nombre.com/.edu/.org/ y sea de las paginas de los paises populares .mx/.ar/.

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace Automata
{
    class Program
    {
        static void Main(string[] args)
        {
            string correo = "";
            Console.WriteLine("Ingrese su correo");
            correo = Console.ReadLine();
            Console.WriteLine("El correo es: " + correo);
            Console.WriteLine("El correo es valido: " + validarCorreo(correo));
            Console.ReadKey();
        }

        public static bool validarCorreo(string correo)
        {
            //REGEX
            //mi.correo_es_de@nombre.com/.edu/.org/

                


            Regex regex = new Regex(@"^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$");
            Match match = regex.Match(correo);
            if (match.Success)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
