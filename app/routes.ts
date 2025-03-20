import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("./layouts/main-layout.tsx", [
    index("routes/home.tsx"),
    route("our-projects", "routes/projects/our-projects.tsx", [
      route("one-girl-one-box", "routes/projects/one-girl-one-box.tsx"),
      route(
        "volunteer-medical-placement",
        "routes/projects/volunteer-placement-program.tsx"
      ),
      route(
        "mental-health-education",
        "routes/projects/mental-health-education.tsx"
      ),
      route("volunteer-project", "routes/projects/volunteer-project.tsx"),
    ]),
    route("blog", "routes/blog/blog.tsx"),
  ]),
] satisfies RouteConfig;
