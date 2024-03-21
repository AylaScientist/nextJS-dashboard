import { useRouter } from 'next/router';

export default function Resource() {
    const router = useRouter();
    const { uuid } = router.query;

    return <div>Viewing resource with UUID: {uuid}</div>;
}

