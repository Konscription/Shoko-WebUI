import semver from 'semver';

import { webuiSettingsPatches } from '@/core/patches';
import { uiVersion } from '@/core/util';

import type { SettingsServerType, SettingsType, WebUISettingsType } from '@/core/types/api/settings';

const initialLayout = {
  dashboard: {
    lg: [
      {
        i: 'queueProcessor',
        x: 0,
        y: 0,
        w: 6,
        h: 14,
        minW: 2,
        minH: 2,
        moved: false,
        static: false,
      },
      {
        i: 'unrecognizedFiles',
        x: 6,
        y: 0,
        w: 6,
        h: 14,
        minW: 2,
        minH: 2,
        moved: false,
        static: false,
      },
      {
        i: 'recentlyImported',
        x: 0,
        y: 16,
        w: 12,
        h: 18,
        minW: 2,
        minH: 2,
        moved: false,
        static: false,
      },
      {
        i: 'collectionBreakdown',
        x: 0,
        y: 37,
        w: 3,
        h: 15,
        minW: 2,
        minH: 2,
        moved: false,
        static: false,
      },
      {
        i: 'collectionTypeBreakdown',
        x: 3,
        y: 37,
        w: 3,
        h: 15,
        minW: 2,
        minH: 2,
        moved: false,
        static: false,
      },
      {
        i: 'importFolders',
        x: 6,
        y: 37,
        w: 3,
        h: 15,
        minW: 2,
        minH: 2,
        moved: false,
        static: false,
      },
      {
        i: 'shokoNews',
        x: 9,
        y: 37,
        w: 3,
        h: 15,
        minW: 2,
        minH: 2,
        moved: false,
        static: false,
      },
      {
        i: 'continueWatching',
        x: 0,
        y: 53,
        w: 12,
        h: 18,
        minW: 2,
        minH: 2,
        moved: false,
        static: false,
      },
      {
        i: 'nextUp',
        x: 0,
        y: 67,
        w: 12,
        h: 18,
        minW: 2,
        minH: 2,
        moved: false,
        static: false,
      },
      {
        i: 'upcomingAnime',
        x: 0,
        y: 81,
        w: 12,
        h: 20,
        minW: 2,
        minH: 2,
        moved: false,
        static: false,
      },
      {
        i: 'recommendedAnime',
        x: 0,
        y: 103,
        w: 12,
        h: 18,
        minW: 2,
        minH: 2,
        moved: false,
        static: false,
      },
    ],
    md: [
      {
        i: 'collectionBreakdown',
        x: 0,
        y: 0,
        w: 5,
        h: 16,
        minW: 2,
        minH: 2,
        moved: false,
        static: false,
      },
      {
        i: 'collectionTypeBreakdown',
        x: 5,
        y: 0,
        w: 5,
        h: 16,
        minW: 2,
        minH: 2,
        moved: false,
        static: false,
      },
      {
        i: 'queueProcessor',
        x: 0,
        y: 16,
        w: 10,
        h: 16,
        minW: 2,
        minH: 2,
        moved: false,
        static: false,
      },
      {
        i: 'recentlyImported',
        x: 0,
        y: 32,
        w: 10,
        h: 19,
        minW: 2,
        minH: 2,
        moved: false,
        static: false,
      },
      {
        i: 'shokoNews',
        x: 0,
        y: 51,
        w: 5,
        h: 14,
        minW: 2,
        minH: 2,
        moved: false,
        static: false,
      },
      {
        i: 'importFolders',
        x: 5,
        y: 51,
        w: 5,
        h: 14,
        minW: 2,
        minH: 2,
        moved: false,
        static: false,
      },
      {
        i: 'unrecognizedFiles',
        x: 0,
        y: 65,
        w: 10,
        h: 14,
        minW: 2,
        minH: 2,
        moved: false,
        static: false,
      },
      {
        i: 'continueWatching',
        x: 0,
        y: 79,
        w: 10,
        h: 19,
        minW: 2,
        minH: 2,
        moved: false,
        static: false,
      },
      {
        i: 'nextUp',
        x: 0,
        y: 98,
        w: 10,
        h: 19,
        minW: 2,
        minH: 2,
        moved: false,
        static: false,
      },
      {
        i: 'upcomingAnime',
        x: 0,
        y: 117,
        w: 10,
        h: 21,
        minW: 2,
        minH: 2,
        moved: false,
        static: false,
      },
      {
        i: 'recommendedAnime',
        x: 0,
        y: 138,
        w: 10,
        h: 19,
        minW: 2,
        minH: 2,
        moved: false,
        static: false,
      },
    ],
    sm: [
      {
        i: 'collectionBreakdown',
        x: 0,
        y: 0,
        w: 6,
        h: 16,
        minW: 2,
        minH: 2,
        moved: false,
        static: false,
      },
      {
        i: 'collectionTypeBreakdown',
        x: 0,
        y: 16,
        w: 6,
        h: 16,
        minW: 2,
        minH: 2,
        moved: false,
        static: false,
      },
      {
        i: 'queueProcessor',
        x: 0,
        y: 32,
        w: 6,
        h: 16,
        minW: 2,
        minH: 2,
        moved: false,
        static: false,
      },
      {
        i: 'recentlyImported',
        x: 0,
        y: 48,
        w: 6,
        h: 19,
        minW: 2,
        minH: 2,
        moved: false,
        static: false,
      },
      {
        i: 'shokoNews',
        x: 0,
        y: 67,
        w: 6,
        h: 14,
        minW: 2,
        minH: 2,
        moved: false,
        static: false,
      },
      {
        i: 'importFolders',
        x: 0,
        y: 81,
        w: 6,
        h: 14,
        minW: 2,
        minH: 2,
        moved: false,
        static: false,
      },
      {
        i: 'unrecognizedFiles',
        x: 0,
        y: 95,
        w: 6,
        h: 14,
        minW: 2,
        minH: 2,
        moved: false,
        static: false,
      },
      {
        i: 'continueWatching',
        x: 0,
        y: 109,
        w: 6,
        h: 19,
        minW: 2,
        minH: 2,
        moved: false,
        static: false,
      },
      {
        i: 'nextUp',
        x: 0,
        y: 128,
        w: 6,
        h: 19,
        minW: 2,
        minH: 2,
        moved: false,
        static: false,
      },
      {
        i: 'upcomingAnime',
        x: 0,
        y: 147,
        w: 6,
        h: 21,
        minW: 2,
        minH: 2,
        moved: false,
        static: false,
      },
      {
        i: 'recommendedAnime',
        x: 0,
        y: 168,
        w: 6,
        h: 19,
        minW: 2,
        minH: 2,
        moved: false,
        static: false,
      },
    ],
  },
};

export const initialSettings: SettingsType = {
  WebUI_Settings: {
    notifications: true,
    settingsRevision: 0,
    theme: 'theme-shoko-gray',
    toastPosition: 'bottom-right',
    updateChannel: semver.prerelease(uiVersion()) ? 'Dev' : 'Stable',
    layout: initialLayout,
    collection: {
      view: 'poster',
      poster: {
        showEpisodeCount: true,
        showGroupIndicator: true,
        showUnwatchedCount: true,
        showRandomPoster: false,
      },
      list: {
        showItemType: true,
        showGroupIndicator: true,
        showTopTags: true,
        showCustomTags: true,
        showRandomPoster: false,
      },
    },
    dashboard: {
      hideQueueProcessor: false,
      hideUnrecognizedFiles: false,
      hideRecentlyImported: false,
      hideCollectionStats: false,
      hideMediaType: false,
      hideImportFolders: false,
      hideShokoNews: false,
      hideContinueWatching: false,
      hideNextUp: false,
      hideUpcomingAnime: false,
      hideRecommendedAnime: false,
      combineContinueWatching: false,
      hideR18Content: true,
      shokoNewsPostsCount: 5,
      recentlyImportedEpisodesCount: 30,
      recentlyImportedSeriesCount: 20,
    },
  },
  FirstRun: false,
  Database: {
    MySqliteDirectory: '',
    DatabaseBackupDirectory: '',
    Type: 'SQLite',
    Username: '',
    Password: '',
    Schema: '',
    Hostname: '',
    SQLite_DatabaseFile: '',
  },
  AniDb: {
    Username: '',
    Password: '',
    AVDumpKey: '',
    ClientPort: 4556,
    AVDumpClientPort: 4557,
    DownloadCharacters: false,
    DownloadCreators: false,
    DownloadRelatedAnime: false,
    DownloadReleaseGroups: false,
    MaxRelationDepth: 0,
    MyList_AddFiles: false,
    MyList_DeleteType: 0,
    MyList_ReadUnwatched: false,
    MyList_ReadWatched: false,
    MyList_SetUnwatched: false,
    MyList_SetWatched: false,
    MyList_StorageState: 0,
    Calendar_UpdateFrequency: 1,
    Anime_UpdateFrequency: 1,
    MyList_UpdateFrequency: 1,
    MyListStats_UpdateFrequency: 1,
    File_UpdateFrequency: 1,
  },
  TvDB: {
    AutoLink: false,
    AutoFanart: false,
    AutoFanartAmount: 0,
    AutoWideBanners: false,
    AutoWideBannersAmount: 0,
    AutoPosters: false,
    AutoPostersAmount: 0,
    UpdateFrequency: 1,
    Language: 'en',
  },
  MovieDb: {
    AutoFanart: false,
    AutoFanartAmount: 0,
    AutoPosters: false,
    AutoPostersAmount: 0,
  },
  TraktTv: {
    Enabled: false,
    TokenExpirationDate: '',
    UpdateFrequency: 1,
    SyncFrequency: 1,
  },
  Plex: {
    Server: '',
    Libraries: [],
    Token: '',
  },
  LogRotator: {
    Enabled: false,
    Zip: false,
    Delete: false,
    Delete_Days: '0',
  },
  GA_OptOutPlzDont: false,
  AutoGroupSeries: false,
  AutoGroupSeriesUseScoreAlgorithm: false,
  AutoGroupSeriesRelationExclusions: [],
  LanguageUseSynonyms: false,
  LanguagePreference: ['x-jat', 'en'],
  EpisodeLanguagePreference: ['en'],
  Import: {
    MoveOnImport: false,
    RenameOnImport: false,
    RenameThenMove: false,
    RunOnStart: false,
    UseExistingFileWatchedStatus: false,
    VideoExtensions: [],
  },
  TraceLog: false,
};

export const transformSettings = (response: SettingsServerType) => {
  let webuiSettings = JSON.parse(
    response.WebUI_Settings === '' ? '{}' : response.WebUI_Settings,
  ) as WebUISettingsType;
  const settingsRevision = webuiSettings.settingsRevision ?? 0;
  if (settingsRevision < 4) {
    webuiSettings = {
      ...initialSettings.WebUI_Settings,
      settingsRevision: Number(Object.keys(webuiSettingsPatches).pop()),
    };
  } else {
    Object
      .keys(webuiSettingsPatches)
      .map(Number)
      .filter(key => key > settingsRevision)
      .forEach((key) => {
        webuiSettings = webuiSettingsPatches[key](webuiSettings);
      });
    webuiSettings = Object.assign({}, initialSettings.WebUI_Settings, webuiSettings);
  }
  return { ...response, WebUI_Settings: webuiSettings } as SettingsType;
  // For Dev Only
  // return { ...response, WebUI_Settings: initialSettings.WebUI_Settings } as SettingsType;
};