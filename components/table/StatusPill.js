import { classNames } from "../../utilities/Utils"

export function StatusPill(value) {
    const status = value ? value.toLowerCase() : "unknown"

    return (
        <span
            className={classNames(
                "px-3 py-1 uppercase leading-wide font-bold text-xs rounded-full shadow-sm",
                status.startsWith("active") ? "bg-green-700 text-content" : null,
                status.startsWith("ongoing") ? "bg-yellow-700 text-content" : null,
                status.startsWith("closed") ? "bg-red-700 text-content" : null
            )}
        >
            {status}
        </span>
    )
}
