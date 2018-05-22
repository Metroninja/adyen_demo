import React from 'react';
import { ChevronRight } from './';

export const Venue = ({venue, alt}) => (
  <section className={`venue ${!!alt ? 'alt' : ''}`}>
    <section>
      <h4>{venue.name}</h4>
      <div>
        {venue.categories.map((c, index) => <span key={c.id}>{c.name}</span>)}
      </div>
      <div>Here now {venue.hereNow.count}</div>
    </section>
    <ChevronRight />
  </section>
)