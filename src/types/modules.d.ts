import precss from 'precss'
const TPreCss = typeof precss
declare module PreCss {
    export interface TPreCss {}
}