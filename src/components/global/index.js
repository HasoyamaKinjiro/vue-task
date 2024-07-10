import UFile from './UFile';
import UInput from './UInput';
import UButton from './UButton';
import UStars from './UStars';

const components = [
    {
        name: 'UFile',
        component: UFile
    },
    {
        name: 'UInput',
        component: UInput
    },
    {
        name: 'UButton',
        component: UButton
    },
    {
        name: 'UStars',
        component: UStars
    }
];

export default {
    install (app) {
        components.forEach(({ name, component }) => {
            app.component(name, component);
        });
    }
};
