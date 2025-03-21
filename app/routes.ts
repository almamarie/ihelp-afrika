import {
  type RouteConfig,
  index,
  layout,
  prefix,
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

    layout("./layouts/blog-layout.tsx", [
      ...prefix("blog", [
        index("routes/blog/blog.tsx"),
        route(":slug", "routes/blog/blog-details.tsx"),
      ]),
    ]),
  ]),
] satisfies RouteConfig;
