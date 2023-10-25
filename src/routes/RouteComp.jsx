import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import PageIndex from "../pages/Page/PageIndex";
import Property from "../pages/RealEstate/properties";
import Features from "../pages/RealEstate/features";
import Facility from "../pages/RealEstate/facilities";
import Category from "../pages/RealEstate/categories";
import Types from "../pages/RealEstate/types";
import Medias from "../pages/Medias/Medias";
import Setting from "../pages/RealEstate/setting";
import Testimonials from "../pages/Testimonials/Testimonials";
import Consults from "../pages/Consults/Consults";
import Account from "../pages/Accounts/Account";
import Sliders from "../pages/Sliders/Sliders";
import Contact from "../pages/Contact/Contact";
import MediaSetting from "../pages/Settings/media";
import SocialLink from "../pages/Settings/socialLink";
import Security from "../pages/Settings/Security";
import AppliedFlat from "../pages/AppliedFlat/AppliedFlat";
import DossiersDetails from "../pages/Dossiers/DossiersDetails";
import AdminRef from "../pages/AdminReferences/AdminRef";
import Employers from "../pages/Employees/Employers";
import Sponsors from "../pages/Sponsors/Sponsors";
import FacilityForm from "../components/forms/FacilityForm";
import Tags from "../pages/Blog/Tags";
import Catergories from "../pages/Blog/Catergories";
import Post from "../pages/Blog/Post";
import General from "../pages/Settings/general";
import Notifications from "../pages/Settings/Notifications";
// import General from "../pages/Settings/General";
// import Blog from "../pages/Blog/Blog";

function RouteComp() {
  const routes = [
    { path: "/", element: <Dashboard /> },
    { path: "/pages", element: <PageIndex /> },
    // { path: "/blog", element: <Blog /> },
    { path: "/post", element: <Post /> },
    { path: "/categories1", element: <Catergories /> },
    { path: "/tags", element: <Tags /> },
    { path: "/properties", element: <Property /> },
    { path: "/features", element: <Features /> },
    { path: "/facilities", element: <Facility /> },
    { path: "/categories", element: <Category /> },
    { path: "/types", element: <Types /> },
    { path: "/medias", element: <Medias /> },
    { path: "/setting", element: <Setting /> },
    { path: "/testimonials", element: <Testimonials /> },
    { path: "/consult", element: <Consults /> },
    { path: "/account", element: <Account /> },
    { path: "/sliders", element: <Sliders /> },
    { path: "/contact", element: <Contact /> },
    { path: "/mediasetting", element: <MediaSetting /> },
    { path: "/general", element: <General/> },
    { path: "/notification", element: <Notifications/> },
    { path: "/social-link", element: <SocialLink /> },
    { path: "/security", element: <Security /> },
    { path: "/applied-flat", element: <AppliedFlat /> },
    { path: "/dossier-details", element: <DossiersDetails /> },
    { path: "/admin-ref", element: <AdminRef /> },
    { path: "/emp-ref", element: <Employers /> },
    { path: "/sponsors", element: <Sponsors /> },
    { path: "/facilites", element: <FacilityForm /> },
  ];

  return (
    <div>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
}

export default RouteComp;

// import { Route, Routes } from "react-router-dom";
// import Dashboard from "../pages/Dashboard/Dashboard";
// import PageIndex from "../pages/Page/PageIndex";
// import Blog from "../pages/Blog/Blog";
// import Property from "../pages/RealEstate/properties";
// import Features from "../pages/RealEstate/features";
// import Facility from "../pages/RealEstate/facilities";
// import Category from "../pages/RealEstate/categories";
// import Types from "../pages/RealEstate/types";
// import Medias from "../pages/Medias/Medias";
// import Setting from "../pages/RealEstate/setting";
// import Testimonials from "../pages/Testimonials/Testimonials";
// import Consults from "../pages/Consults/Consults";
// import Account from "../pages/Accounts/Account";
// import Sliders from "../pages/Sliders/Sliders";
// import Contact from "../pages/Contact/Contact";
// import MediaSetting from "../pages/Settings/media";
// import SocialLink from "../pages/Settings/socialLink";
// import SocialLogin from "../pages/Settings/socialLogin";
// import AppliedFlat from "../pages/AppliedFlat/AppliedFlat";
// import DossiersDetails from "../pages/Dossiers/DossiersDetails";
// import AdminRef from "../pages/AdminReferences/AdminRef";
// import Employers from "../pages/Employees/Employers";
// import Sponsors from "../pages/Sponsors/Sponsors";

// function RouteComp() {
//   // Create an array of route objects
//   const routes = [
//     { path: "/", element: <Dashboard /> },
//     { path: "/pages", element: <PageIndex /> },
//     { path: "/blog", element: <Blog /> },
//     { path: "/properties", element: <Property /> },
//     { path: "/features", element: <Features /> },
//     { path: "/facilities", element: <Facility /> },
//     { path: "/categories", element: <Category /> },
//     { path: "/types", element: <Types /> },
//     { path: "/medias", element: <Medias /> },
//     { path: "/setting", element: <Setting /> },
//     { path: "/testimonials", element: <Testimonials /> },
//     { path: "/consult", element: <Consults /> },
//     { path: "/account", element: <Account /> },
//     { path: "/sliders", element: <Sliders /> },
//     { path: "/contact", element: <Contact /> },
//     { path: "/mediasetting", element: <MediaSetting /> },
//     { path: "/social-link", element: <SocialLink /> },
//     { path: "/social-login", element: <SocialLogin /> },
//     { path: "/applied-flat", element: <AppliedFlat /> },
//     { path: "/dossier-details", element: <DossiersDetails /> },
//     { path: "/admin-ref", element: <AdminRef /> },
//     { path: "/emp-ref", element: <Employers /> },
//     { path: "/sponsors", element: <Sponsors /> },
//   ];

//   return (
//     <div>
//       <Routes>
//         {routes.map((route, index) => (
//           <Route key={index} path={route.path} element={route.element} />
//         ))}
//       </Routes>
//     </div>
//   );
// }

// export default RouteComp;
