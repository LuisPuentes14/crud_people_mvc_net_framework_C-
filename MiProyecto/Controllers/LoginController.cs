using MiProyecto.Models;
using MiProyecto.Object;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;
using System.Web.UI.WebControls;

namespace MiProyecto.Controllers
{
    public class LoginController : Controller
    {
        // GET: Login
        public ActionResult Login()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult IniLogin(FormCollection usuario)
        {

            string login = usuario["usu_login"];
            string password = usuario["usu_password"];
           

            //Encriptamos la contraseña que llega desde front
            Encrypt validateLogin = new Encrypt(password);
            password = validateLogin.getPasswordEncryp();

            //Validamos el usuario y la contraseña

            using (PruebaTecnicaEntities db = new PruebaTecnicaEntities())
            {


                var user = from m in db.usuario
                           where m.Login == login
                           select m;

                if (user.ToList().Count > 0)
                {
                    user = from m in db.usuario
                           where m.Login == login && m.password == password
                           select m;

                    if (user.ToList().Count > 0)
                    {

                       var log = ( from m in db.usuario
                               where m.Login == login && m.password == password
                               select m).FirstOrDefault();

                        Session["usuario"] = log.Login;
                        FormsAuthentication.SetAuthCookie(login, false);
                        return Redirect("~/Personas/Index");

                    }
                    else
                    {

                        Session["message"] = "Contraseña incorrecta.";
                        Session["tipo"] = "Error";
                    }

                }
                else
                {
                    Session["message"] = "Usuario incorrecto.";
                    Session["tipo"] = "Error";
                }
            }

            return RedirectToAction("Login");

        }

        public void CerrarSesion()
        {
            FormsAuthentication.SignOut();
            FormsAuthentication.RedirectToLoginPage();
        }


        public ActionResult Registar(FormCollection usuario)
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult AddUser(FormCollection usuario)
        {

            string login = usuario["usuario"];
            string password = usuario["password"];
            string password2 = usuario["password2"];


            if (password2 != password)
            {
                Session["message"] = "las contraseñas no son iguales.";
                Session["tipo"] = "Error";
            }
            else
            {
                Encrypt encrypt = new Encrypt(password);
                password = encrypt.getPasswordEncryp();

                using (PruebaTecnicaEntities db = new PruebaTecnicaEntities())
                {
                    try
                    {
                        usuario usu = new usuario();
                        usu.Login = login;
                        usu.password = password;
                        usu.feche_create = DateTime.Now;

                        db.usuario.Add(usu);
                        db.SaveChanges();

                        Session["message"] = "Usuario creado correctamente";
                        Session["tipo"] = "Ok";
                       return  RedirectToAction("Login");
                    }
                    catch (Exception e)
                    {
                        Session["message"] = "Hubo un error creando el nuevo usuario.";
                        Session["tipo"] = "Error";
                    }

                }


            }
            return RedirectToAction("Registar");
        }

       
    }
}