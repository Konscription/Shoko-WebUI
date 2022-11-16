import React from 'react';
import cx from 'classnames';
import moment from 'moment/moment';

import { useSettingsContext } from '../SettingsPage';

import ShokoPanel from '../../../components/Panels/ShokoPanel';
import Checkbox from '../../../components/Input/Checkbox';
import InputSmall from '../../../components/Input/InputSmall';
import SelectSmall from '../../../components/Input/SelectSmall';
import Button from '../../../components/Input/Button';

import { useLazyGetTraktCodeQuery } from '../../../core/rtkQuery/traktApi';
import toast from '../../../components/Toast';

export const tvdbLanguages = [
  ['en', 'English'],
  ['sv', 'Swedish'],
  ['no', 'Norwegian'],
  ['da', 'Danish'],
  ['fi', 'Finnish'],
  ['nl', 'Dutch'],
  ['de', 'German'],
  ['it', 'Italian'],
  ['es', 'Spanish'],
  ['fr', 'French'],
  ['pl', 'Polish'],
  ['hu', 'Hungarian'],
  ['el', 'Greek'],
  ['tr', 'Turkish'],
  ['ru', 'Russian'],
  ['he', 'Hebrew'],
  ['ja', 'Japanese'],
  ['pt', 'Portuguese'],
  ['cs', 'Czech'],
  ['sl', 'Slovenian'],
  ['hr', 'Croatian'],
  ['ko', 'Korean'],
  ['zh', 'Chinese'],
];

function MetadataSitesSettings() {
  const {
    fetching, newSettings, updateSetting,
  } = useSettingsContext();

  const { MovieDb, TvDB, TraktTv } = newSettings;

  const [traktCodeTrigger, traktCodeResult] = useLazyGetTraktCodeQuery();

  return (
    <>
      <ShokoPanel title="MovieDB Options" isFetching={fetching}>
        <Checkbox justify label="Download Fanart" id="download-tmdb-fanart" isChecked={MovieDb.AutoFanart} onChange={event => updateSetting('MovieDb', 'AutoFanart', event.target.checked)} />
        <div className={cx('flex justify-between mt-2 transition-opacity', !MovieDb.AutoFanart && 'pointer-events-none opacity-50')}>
          Max Fanart
          <InputSmall id="max-tmdb-fanart" value={MovieDb.AutoFanartAmount} type="text" onChange={event => updateSetting('MovieDb', 'AutoFanartAmount', event.target.value)} className="w-10 px-2 py-0.5" />
        </div>
        <Checkbox justify label="Download Posters" id="download-tmdb-posters" isChecked={MovieDb.AutoPosters} onChange={event => updateSetting('MovieDb', 'AutoPosters', event.target.checked)} className="mt-2" />
        <div className={cx('flex justify-between mt-2 transition-opacity', !MovieDb.AutoPosters && 'pointer-events-none opacity-50')}>
          Max Posters
          <InputSmall id="max-tmdb-posters" value={MovieDb.AutoPostersAmount} type="text" onChange={event => updateSetting('MovieDb', 'AutoPostersAmount', event.target.value)} className="w-10 px-2 py-0.5" />
        </div>
      </ShokoPanel>

      <ShokoPanel title="TVDB Options" isFetching={fetching} className="mt-8">
        <Checkbox justify label="Auto Link" id="autolink-tvdb" isChecked={TvDB.AutoLink} onChange={event => updateSetting('TvDB', 'AutoLink', event.target.checked)} />
        <div className="flex justify-between items-center mt-2">
          <span>Language</span>
          <SelectSmall id="tvdb-language" value={TvDB.Language} onChange={event => updateSetting('TvDB', 'Language', event.target.value)}>
            {tvdbLanguages.map(
              item => (<option value={item[0]} key={item[0]}>{item[1]}</option>),
            )}
          </SelectSmall>
        </div>
        <div className="flex justify-between items-center mt-2">
          <span>Automatically Update Stats</span>
          <SelectSmall id="update-tvdb-stats" value={TvDB.UpdateFrequency} onChange={event => updateSetting('TvDB', 'UpdateFrequency', event.target.value)}>
            <option value={1}>Never</option>
            <option value={2}>Every 6 Hours</option>
            <option value={3}>Every 12 Hours</option>
            <option value={4}>Every 24 Hours</option>
            <option value={5}>Once a Week</option>
            <option value={6}>Once a Month</option>
          </SelectSmall>
        </div>
        <Checkbox justify label="Download Fanart" id="download-tvdb-fanart" isChecked={TvDB.AutoFanart} onChange={event => updateSetting('TvDB', 'AutoFanart', event.target.checked)} className="mt-2" />
        <div className={cx('flex justify-between mt-2 transition-opacity', !TvDB.AutoFanart && 'pointer-events-none opacity-50')}>
          Max Fanart
          <InputSmall id="max-tvdb-fanart" value={TvDB.AutoFanartAmount} type="text" onChange={event => updateSetting('TvDB', 'AutoFanartAmount', event.target.value)} className="w-10 px-2 py-0.5" />
        </div>
        <Checkbox justify label="Download Posters" id="download-tvdb-posters" isChecked={TvDB.AutoPosters} onChange={event => updateSetting('TvDB', 'AutoPosters', event.target.checked)} className="mt-2" />
        <div className={cx('flex justify-between mt-2 transition-opacity', !TvDB.AutoPosters && 'pointer-events-none opacity-50')}>
          Max Posters
          <InputSmall id="max-tvdb-posters" value={TvDB.AutoPostersAmount} type="text" onChange={event => updateSetting('TvDB', 'AutoPostersAmount', event.target.value)} className="w-10 px-2 py-0.5" />
        </div>
        <Checkbox justify label="Download Wide Banners" id="download-tvdb-banners" isChecked={TvDB.AutoWideBanners} onChange={event => updateSetting('TvDB', 'AutoWideBanners', event.target.checked)} className="mt-2" />
        <div className={cx('flex justify-between mt-2 transition-opacity', !TvDB.AutoWideBanners && 'pointer-events-none opacity-50')}>
          Max Wide Banners
          <InputSmall id="max-tvdb-baners" value={TvDB.AutoWideBannersAmount} type="text" onChange={event => updateSetting('TvDB', 'AutoWideBannersAmount', event.target.value)} className="w-10 px-2 py-0.5" />
        </div>
      </ShokoPanel>

      <ShokoPanel title="Trakt Options" isFetching={fetching} className="mt-8">
        <Checkbox justify label="Enabled" id="trakt-enabled" isChecked={TraktTv.Enabled} onChange={event => updateSetting('TraktTv', 'Enabled', event.target.checked)} />
        {TraktTv.TokenExpirationDate === '' && traktCodeResult?.data?.usercode && (
          <div className={cx('flex justify-between items-center mt-2', !TraktTv.Enabled && 'pointer-events-none opacity-50')}>
            <div className="flex">
              Trakt Code:<span className="font-bold ml-1">{traktCodeResult?.data?.usercode}</span>
            </div>
            <a href={traktCodeResult?.data?.url} rel="noopener noreferrer" target="_blank" className="text-highlight-2 hover:underline">Click here to activate</a>
          </div>
        )}
        {TraktTv.TokenExpirationDate === '' && !traktCodeResult?.data?.usercode && (
          <div className={cx('flex justify-between items-center mt-2', !TraktTv.Enabled && 'pointer-events-none opacity-50')}>
            Trakt Code
            <Button
              onClick={() => traktCodeTrigger().then(() => toast.info('You have approximately 10 minutes to visit the URL provided and enter the code, refresh the page after activation is complete.', undefined, { autoClose: 10000 }), () => {})}
              className="bg-highlight-1 px-2 py-1"
            >
              {traktCodeResult.isFetching ? 'Requesting...' : 'Get Code'}
            </Button>
          </div>
        )}
        {TraktTv.TokenExpirationDate !== '' && (
          <div className={cx(!TraktTv.Enabled && 'pointer-events-none opacity-50')}>
            <div className="flex justify-between mt-2"><span>Token valid until</span>{moment(TraktTv.TokenExpirationDate, 'X').format('MMM Do YYYY, h:mm A')}</div>
            <div className="flex justify-between items-center mt-2">
              <span>Automatically Update Data</span>
              <SelectSmall id="update-trakt-data" value={TraktTv.UpdateFrequency} onChange={event => updateSetting('TraktTv', 'UpdateFrequency', event.target.value)}>
                <option value={1}>Never</option>
                <option value={2}>Every 6 Hours</option>
                <option value={3}>Every 12 Hours</option>
                <option value={4}>Every 24 Hours</option>
                <option value={5}>Once a Week</option>
                <option value={6}>Once a Month</option>
              </SelectSmall>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span>Sync Frequency</span>
              <SelectSmall id="sync-trakt-data" value={TraktTv.SyncFrequency} onChange={event => updateSetting('TraktTv', 'SyncFrequency', event.target.value)}>
                <option value={1}>Never</option>
                <option value={2}>Every 6 Hours</option>
                <option value={3}>Every 12 Hours</option>
                <option value={4}>Every 24 Hours</option>
                <option value={5}>Once a Week</option>
                <option value={6}>Once a Month</option>
              </SelectSmall>
            </div>
          </div>
        )}
      </ShokoPanel>
    </>
  );
}

export default MetadataSitesSettings;