import { RouteConfig } from 'vue-router';
interface RequireContext {
    keys(): string[];
    (id: string): any;
    <T>(id: string): T;
    resolve(id: string): string;
    id: string;
}
export declare function requiredRoutes(requireRoutes: RequireContext): RouteConfig[];
export default requiredRoutes;
