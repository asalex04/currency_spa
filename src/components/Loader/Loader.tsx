import classNames from "classnames";
import './Loader.scss';

interface LoaderProps {
    className?: string
}

export const Loader = ({ className }: LoaderProps) => (
    <div className={classNames('lds-hourglass', {}, [className])}>
        <div />
    </div>
);
