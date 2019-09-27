using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace FrameworkMVCApp.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";
            var username = "VirtuaBoza";
            var model = new ContactModel
            {
                Username = username,
            };

            return View(model);
        }

        [HttpPost]
        public ActionResult Contact(ContactModel model)
        {
            return View(model);
        }
    }

    public class ContactModel
    {
        public string Username { get; set; }
        public string Subject { get; set; }
        public string Body { get; set; }
    }
}