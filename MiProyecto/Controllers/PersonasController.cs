using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using System.Net;
using System.Web;
using System.Web.Mvc;
using MiProyecto.Models;

namespace MiProyecto.Controllers
{
    [Authorize]
    public class PersonasController : Controller
    {
        private PruebaTecnicaEntities db = new PruebaTecnicaEntities();

        // GET: Personas
        public ActionResult Index()
        {
            var personas = db.getListPersons();
            return View(personas);
        }


        public ActionResult Create()
        {
            ViewBag.id_identificacion = new SelectList(db.tipoIdentificacion, "id", "indentificacion");
            return View();
        }


        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(FormCollection personas)
        {
            using (PruebaTecnicaEntities db = new PruebaTecnicaEntities())
            {

                try
                {
                    personas per = new personas();

                    per.nombre = personas["nombre"];
                    per.apellido = personas["apellido"];
                    per.indentifiacion = (int)Int64.Parse(personas["indentifiacion"]);
                    per.Email = personas["email"];
                    per.id_identificacion = (int)Int64.Parse(personas["id_identificacion"]);
                    per.feche_create = DateTime.Now;
                    per.id_identidicacion = personas["indentifiacion"] + " - " + personas["id_identificacion"];
                    per.nombre_apellido = personas["nombre"] + " - " + personas["apellido"];

                    db.personas.Add(per);
                    db.SaveChanges();

                    Session["message"] = "Persona agregada correctamente.";
                    Session["tipo"] = "Ok";
                }
                catch (Exception e)
                {

                    Session["message"] = "Hubo un error agregando persona.";
                    Session["tipo"] = "Error";

                    ViewBag.id_identificacion = new SelectList(db.tipoIdentificacion, "id", "indentificacion");
                    return View("Create");
                }

            }
            return RedirectToAction("Index");
        }

     
        public async Task<ActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            personas personas = await db.personas.FindAsync(id);
            if (personas == null)
            {
                return HttpNotFound();
            }
            ViewBag.id_identificacion = new SelectList(db.tipoIdentificacion, "id", "indentificacion", personas.id_identificacion);
            return View(personas);
        }



        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(FormCollection personas)
        {
            int id = (int)Int64.Parse(personas["id"]);

            using (PruebaTecnicaEntities db = new PruebaTecnicaEntities())
            {
                try
                {
                    var upd = (from x in db.personas
                               where x.id == id
                               select x).FirstOrDefault();

                    upd.nombre = personas["nombre"];
                    upd.apellido = personas["apellido"];
                    upd.indentifiacion = (int)Int64.Parse(personas["indentifiacion"]);
                    upd.Email = personas["Email"];
                    upd.id_identificacion = (int)Int64.Parse(personas["id_identificacion"]);

                    db.SaveChanges();

                    Session["message"] = "Persona actualizada correctamente.";
                    Session["tipo"] = "Ok";
                }
                catch (Exception e)
                {
                    Session["message"] = "Hubo un error actualizando.";
                    Session["tipo"] = "Error";
                }
            }

            ViewBag.id_identificacion = new SelectList(db.tipoIdentificacion, "id", "indentificacion");
            return RedirectToAction("Index");
        }


        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(FormCollection persona)
        {

            int id = (int)Int64.Parse(persona["idEliminar"]);

            using (PruebaTecnicaEntities db = new PruebaTecnicaEntities())
            {
                try
                {
                    var per = from x in db.personas
                              where x.id == id
                              select x;

                    db.personas.RemoveRange(per);
                    db.SaveChanges();

                    Session["message"] = "Perosona eliminada correctamente";
                    Session["tipo"] = "Ok";

                }
                catch (Exception e)
                {
                    Session["error"] = "Hubo un error eliminando persona.";
                    Session["tipo"] = "Error";
                }




            }

            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
