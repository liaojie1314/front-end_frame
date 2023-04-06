import React, { Suspense } from "react";
import Spinner from "../components/spinner";
const lazyLoad = (Comp: React.LazyExoticComponent<() => JSX.Element>) => {
    return (
        <Suspense fallback={<Spinner />}>
            <Comp />
        </Suspense>
    )
}

export default lazyLoad;