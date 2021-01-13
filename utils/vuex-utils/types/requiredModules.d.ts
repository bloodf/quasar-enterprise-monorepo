import { ModuleTree } from 'vuex';
interface RequireContext {
    keys(): string[];
    (id: string): any;
    <T>(id: string): T;
    resolve(id: string): string;
    id: string;
}
export declare function requiredModules<S>(requireModule: RequireContext): ModuleTree<S>;
export default requiredModules;
