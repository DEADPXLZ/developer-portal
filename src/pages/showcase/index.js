import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Image from '@theme/IdealImage';
import styles from './styles.module.css';
import showcases from '../../data/showcases';
import PortalHero from '../portalhero';

const TITLE       = 'Showcase';
const DESCRIPTION = 'See the awesome projects people are building with Cardano';
const CTA         = 'Add your project';
const FILENAME    = 'showcases.js'

function Showcase() {
  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <PortalHero title={TITLE} description={DESCRIPTION} cta={CTA} filename={FILENAME}/>
      <main className="container margin-vert--lg">
        <div className="text--center margin-bottom--xl">
        </div>
        <div className="row">
          {showcases.map((showcase) => (
            <div key={showcase.title} className="col col--4 margin-bottom--lg">
              <div className={clsx('card', styles.showcaseUser)}>
                <div className="card__image">
                  <Image img={showcase.preview} alt={showcase.title} />
                </div>
                <div className="card__body">
                  <div className="avatar">
                    <div className="avatar__intro margin-left--none">
                      <h4 className="avatar__name">{showcase.title}</h4>
                      <small className="avatar__subtitle">
                        {showcase.description}
                      </small>
                    </div>
                  </div>
                </div>
                {(showcase.website || showcase.source) && (
                  <div className="card__footer">
                    <div className="button-group button-group--block">
                      {showcase.website && (
                        <a
                          className="button button--small button--secondary button--block"
                          href={showcase.website}
                          target="_blank"
                          rel="noreferrer noopener">
                          Website
                        </a>
                      )}
                      {showcase.source && (
                        <a
                          className="button button--small button--secondary button--block"
                          href={showcase.source}
                          target="_blank"
                          rel="noreferrer noopener">
                          Source
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}

export default Showcase;