import {Link, useLocation} from 'react-router-dom';

export default function Pathbar() {
    const location = useLocation();
    const pathArray = location.pathname.split('/');

    return (
        <div className="flex pl-5">
            {pathArray.map((path, index) => {
                const formattedPath = index > 1 && path.replace(/-/g, ' ')
                    .replace(/^\w/, c => c.toUpperCase())
                    .replace(/\b\w/g, c => c.toUpperCase());

                return (
                    <div key={index}>
                        {index > 1 && <span className="mx-2">/</span>}
                        <Link
                            className={index === 2 ? 'text-red-500' : 'text-black'}
                            title={formattedPath.toString()}
                            to={pathArray.slice(0, index + 1).join('/')}
                        >
                            {formattedPath}
                        </Link>
                    </div>
                );
            })}
        </div>
    );
}
