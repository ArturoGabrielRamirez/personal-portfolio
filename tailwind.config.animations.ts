type Animation = Record<string, string>;
type Keyframes = Record<string, Record<string, { transform?: string; opacity?: string; height?: string; width?: string }>>;

const keyframes: Keyframes = {
    'slide-in-left': {
        '0%': { transform: 'translateX(-100%)', opacity: '0' },
        '60%': { transform: 'translateX(20px)', opacity: '1' },
        '100%': { transform: 'translateX(0)', opacity: '1' },
    },
    'slide-in-right': {
        '0%': { transform: 'translateX(100%)', opacity: '0' },
        '60%': { transform: 'translateX(-20px)', opacity: '1' },
        '100%': { transform: 'translateX(0)', opacity: '1' },
    },
    'slide-in-up': {
        '0%': { transform: 'translateY(100%)', opacity: '0' },
        '60%': { transform: 'translateY(-20px)', opacity: '1' },
        '100%': { transform: 'translateY(0)', opacity: '1' },
    },
    'slide-in-down': {
        '0%': { transform: 'translateY(-100%)', opacity: '0' },
        '60%': { transform: 'translateY(20px)', opacity: '1' },
        '100%': { transform: 'translateY(0)', opacity: '1' },
    },
    'slide-in-down-stretch': {
        '0%': { opacity: '0', height: '0', width: '100%' }, // Inicialmente, altura 0
        '60%': { opacity: '1', height: '120%', width: '100%' }, // Altura inicial
        '100%': { opacity: '1', height: '100%', width: '100%' }, // Altura final
      },
};

const ANIMATION_DURATION = '1s';
const ANIMATION_EASING = 'ease-out';

const animation: Animation = {
    'slide-in-left': `slide-in-left ${ANIMATION_DURATION} ${ANIMATION_EASING}`,
    'slide-in-right': `slide-in-right ${ANIMATION_DURATION} ${ANIMATION_EASING}`,
    'slide-in-up': `slide-in-up ${ANIMATION_DURATION} ${ANIMATION_EASING}`,
    'slide-in-down': `slide-in-down ${ANIMATION_DURATION} ${ANIMATION_EASING}`,
    'slide-in-down-stretch': `slide-in-down-stretch ${ANIMATION_DURATION} ${ANIMATION_EASING}`,
};

export default {
    keyframes,
    animation,
};