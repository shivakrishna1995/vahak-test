import { FC } from 'react';
import { Header, BiddingCard } from '../../components';
import './index.scss';

export const BiddingPage: FC = () => {
    return <div id="biddingPage">
        <Header />
        <div className="title">
            <div className="content">Old Car Available</div>
            <div className="titleDivider" />
        </div>
        <BiddingCard />
    </div>
}