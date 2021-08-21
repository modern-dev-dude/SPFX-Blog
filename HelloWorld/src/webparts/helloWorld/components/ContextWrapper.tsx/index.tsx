import * as React from "react";
import {WebPartContext} from '@microsoft/sp-webpart-base'

const SpfxContext = React.createContext(undefined)

// Custom hook for error handling providers 
export const useSpfxContext = (): WebPartContext => {
    const spfxCtx = React.useContext(SpfxContext);
    if (spfxCtx === undefined) {
        throw new Error('useSpfxContet must be used within a SpfxContextProvider')
    }
    return spfxCtx
}

const SpfxContextWrapper = ({children, value}) => {
    return(
        <SpfxContext.Provider value={value}>
            {children}
        </SpfxContext.Provider>
    )
};
export default SpfxContextWrapper;
