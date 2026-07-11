import { useEffect, useState } from "react";
import { apiservises } from "../services/api";
import type { PageProductsResponse } from "../types/types";

export const Dashboard: React.FC = () => {
    const [data, setData] = useState<PageProductsResponse | null>(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        setLoading(true);
        apiservises.getProducts(0, 8)
            .then(res => setData(res))
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    }       , []);
