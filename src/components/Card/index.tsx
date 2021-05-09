import { FC } from 'react';
import './index.scss';
import Icon from '../../assets/images/Group 15945.svg';
import Icon1 from '../../assets/images/Path 25988.svg';
import Icon2 from '../../assets/images/payment.svg';
import MoreIcon from '../../assets/images/More.svg';
import ProfileIcon from '../../assets/images/drawable-mdpi/Profile.png';

export const Card: FC = () => {
    return <div className="card">
        <div className="cardHeader">
            <div className="cardHeaderTitle">Honda City</div>
            <div className="cardHeaderDate">Posted at 1 Nov, 9.30 AM</div>
        </div>
        <div className="cardContent">
            <div className="specifications">
                <div className="specification">
                    <img alt="." src={Icon} width={11.41} height={13} style={{ marginRight: 19.59 }} />
                    <div className="description">Specification 01</div>
                </div>
                <div className="specification">
                    <img alt="." src={Icon1} width={17.77} height={10} style={{ marginRight: 13.23 }} />
                    <div className="description">Specification 02</div>
                </div>
                <div className="specification">
                    <img alt="." src={Icon2} width={14.44} height={10} style={{ marginRight: 16.56 }} />
                    <div className="description">Specification 03</div>
                </div>
            </div>
            <div className="moreDetails">
                <div className="content">More Details</div>
                <img alt="." src={MoreIcon} width={10} height={5.75} />
            </div>
            <div className="cardFooter">
                <img alt="." src={ProfileIcon} width={36} height={36} />
                <div className="content">
                    <div className="name">
                        Rohan Sharma
                    </div>
                    <div className="location">
                        Bengaluru, Karnataka
                    </div>
                </div>
            </div>
        </div>
    </div>
}