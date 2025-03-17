import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("./layouts/main-layout.tsx", [
    index("routes/home.tsx"),
    route("our-projects", "routes/our-projects.tsx", [
      route("one-girl-one-box", "routes/one-girl-one-box.tsx"),
      route(
        "volunteer-medical-placement",
        "routes/volunteer-placement-program.tsx"
      ),
      route("mental-health-education", "routes/mental-health-education.tsx"),
      route("volunteer-project", "routes/volunteer-project.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
