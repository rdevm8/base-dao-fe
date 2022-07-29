import { useRouter } from "next/router"

export default function viewPool() {
    const router = useRouter()
    const {
        query: { id },
    } = router
    return <div className="text-content">HELLO ${id}</div>
}
