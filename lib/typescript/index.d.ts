export declare type ChangeIconExtraParams = {
    customPackageName?: string;
    whenToKillOldClasses?: string;
};
declare const WhenToKillOldClasses: {
    ON_ACTIVITY_PAUSED: any;
    ON_ACTIVITY_STOPPED: any;
    ON_ACTIVITY_DESTROYED: any;
};
export { WhenToKillOldClasses };
export declare function changeIcon(iconName: string, extraParams?: ChangeIconExtraParams): Promise<number>;
