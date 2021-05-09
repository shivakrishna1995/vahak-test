import { FC, useState } from 'react';
import { Header, BiddingCard, Button } from '../../components';
import './index.scss';

interface IBiddingPageState {
    "bidAmount": string,
    "priceType": "Fixed" | "Negotiable",
    "mobile": string,
    "name": string,
    "remarks": string,
}

export const BiddingPage: FC = () => {
    const [formData, setFormData] = useState<IBiddingPageState>({
        "bidAmount": "",
        "priceType": "Fixed",
        "mobile": "",
        "name": "",
        "remarks": ""
    });

    const onChange = (name: string, value: string) => setFormData(dt => ({ ...dt, [name]: value }))

    return <div id="biddingPage">
        <Header />
        <div className="title">
            <div className="content">Old Car Available</div>
            <div className="titleDivider" />
        </div>
        <BiddingCard onChange={onChange} formData={formData} />
        <Button active={Object.values(formData).findIndex(data => data.length === 0) === -1} />
    </div>
}