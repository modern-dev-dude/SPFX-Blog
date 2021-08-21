import { Stack, IStackProps, Text } from "@fluentui/react";
import * as React from 'react';
import { useSpfxContext } from "./ContextWrapper.tsx";

const stackProps : IStackProps ={
    tokens:{
        childrenGap:10,
        padding:10
    },
    horizontal:false,
    horizontalAlign:'start',
    styles:{
        root:{
            overflowWrap:'anywhere'
        }
    }
}

const DeepNestetedComponent = () => {
    const {pageContext} = useSpfxContext();
    const currUser = pageContext.user;
    const currWeb = pageContext.web;
    const itemsFromCtxToDisplay = {
        ...currUser,
        ...currWeb
    }   
    return (
        <Stack {...stackProps}>
            {
                Object.keys(itemsFromCtxToDisplay).map((item, idx) => {
                    let changeItemToText = itemsFromCtxToDisplay[item]
                    if(typeof changeItemToText === 'object'){
                        changeItemToText = JSON.stringify(changeItemToText)
                    }
                    return (
                        <>
                            <Text 
                            key={`PageContextLabelItem_${idx}`}
                            variant='xLarge'
                            >
                                {item}:
                            </Text>
                            <Text 
                                key={`PageContextItem_${idx}`}
                                variant='large'
                            >
                                {changeItemToText}
                            </Text>
                        </>
                    )
                })
            }
        </Stack>
    )
}

export default DeepNestetedComponent