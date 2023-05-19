import { useLayoutEffect, useState } from "react";

type listStyleTypes = 'desktop' | 'mobile'

const useListStyle = () => {

    let [listStyle, setListStyle] = useState<listStyleTypes | undefined>('desktop')

    useLayoutEffect(() => {
        function updateSize() {
            if (window.innerWidth < 636) {
                setListStyle('mobile')
            } else {
                setListStyle('desktop')
            }
        }
        window.addEventListener('resize', updateSize);
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    return listStyle

}

export default useListStyle