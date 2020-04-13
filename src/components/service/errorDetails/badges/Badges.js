import React from 'react';

import Badge from '../badge/Badge';

import styling from './Badges.module.scss';

const Badges = ({ badges = {}, clientIp = '', metrics = {} }) => (
    <section className={styling.badges} hidden={!Object.keys(badges).length && !clientIp}>
        <h4>Badges</h4>
        
        <Badge name='IP address' value={clientIp} />
        
        {Object.keys(metrics).map(key => <Badge key={key} name={key} value={metrics[key]} />)}
        
        {Object.keys(badges).map(key => <Badge key={key} name={key} value={badges[key]} />)}
    </section>
);

export default Badges;