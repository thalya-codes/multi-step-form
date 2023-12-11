import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { IContentTransitionProps } from '../../interfaces/IContentTransition';


export function ContentTransition({ children, className = '' }: IContentTransitionProps) {
    const [isFirstRender, setIsFirstRender] = useState(true);
    const [opacity, setOpacity] = useState<string>('opacity-100');
    const { i18n: { language } } = useTranslation();

    useEffect(() => {
      if (isFirstRender) {
        setIsFirstRender(false);
      }
    }, [isFirstRender]);

    useEffect(() => { 
        if (isFirstRender) return;
             
        setOpacity('opacity-30');

        setTimeout(() => {
            setOpacity(prevOpacity => (prevOpacity === 'opacity-30' 
                ? 'opacity-100' 
                : 'opacity-30'
            ));
        }, 1000);
    }, [language]);

    return (
        <div className={`${opacity} transition-opacity duration-[2000ms] ease-in-out ${className}`}>
            {children}
        </div>
    );
};