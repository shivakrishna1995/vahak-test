import { FC } from 'react';
import './index.scss'

export const BiddingCard: FC = () => {
    return <div id="biddingCard">
        <div className="biddingCardHeader">
            <div className="biddingCardHeaderTitle">Place Your Load BID</div>
            <div className="divider" />
            <div className="biddingCardAmount">
                <div className="biddingCardAmountSymbol">₹</div>
                <div className="biddingCardAmountContent">2,50,000</div>
            </div>
            <div className="biddingCardHeaderActions">
                <div className="biddingCardHeaderActionsActive">Fixed Price</div>
                <div className="biddingCardHeaderActionsInactive">Rate Negiotable</div>
            </div>
        </div>
        <div className="biddingCardHorizontalLine"/>
    </div>
}