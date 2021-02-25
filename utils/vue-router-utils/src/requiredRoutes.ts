import { RouteConfig } from 'vue-router';

interface RequireContext {
  keys(): string[];
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  (id: string): any;
  <T>(id: string): T;
  resolve(id: string): string;
  id: string;
}

export function requiredRoutes(requireRoutes: RequireContext): RouteConfig[] {
  const importedRoutes: RouteConfig[] = [];

  requireRoutes.keys().forEach((fileName) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const routes = requireRoutes(fileName).default;

    if (Array.isArray(routes)) {
      importedRoutes.push(...routes);
    } else {
      importedRoutes.push({
        ...routes,
      });
    }

    return true;
  });

  return importedRoutes;
}

export default requiredRoutes;
