import { cn } from "@/lib/utils";
import { Target } from "lucide-react";
import { Link } from "react-router-dom";
type Props = {
    url?: string;
    showTitle?: boolean,
    iconClassName?: string,
    titleClassName?: string,
}
const Logo = ({ url, showTitle, iconClassName, titleClassName }: Readonly<Props>) => {
    return (
        <Link to={url ?? "/"} className="flex items-center space-x-2">
            <div className="flex flex-col items-center gap-1">
                <div className="flex items-center justify-center gap-2">
                    <Target className="h-6 w-6 text-blue-400" />
                    <span className={cn("font-bold text-xl text-blue-400", iconClassName)}>AdAMS</span>
                </div>

                {
                    showTitle && <span className={cn("text-xs text-center text-gray-500 font-bold", titleClassName)}>Advanced Assets Management System</span>
                }
            </div>
        </Link>
    )
}

export default Logo

