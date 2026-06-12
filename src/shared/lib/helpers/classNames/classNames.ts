type Mods = Record<string, boolean | string>;

export const classNames = (
    baseClass: string,
    mods: Mods,
    additionalClasses?: (string | undefined)[],
) => {
    return [
        baseClass,
        ...(additionalClasses?.filter(Boolean) || []),
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className),
    ].join(" ");
};
