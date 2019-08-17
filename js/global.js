var xBrowserSync = xBrowserSync || {};
xBrowserSync.App = xBrowserSync.App || {};

/* ------------------------------------------------------------------------------------
 * Class name:	xBrowserSync.App.Global
 * Description:	Defines global properties used across all platforms.
 * ------------------------------------------------------------------------------------ */

xBrowserSync.App.Global = function (platform) {
  'use strict';

  var Global = {
    Alarm: {
      Name: 'xBrowserSync-alarm',
      Period: 15
    },
    AppVersion: '1.5.1',
    Bookmarks: {
      ContainerPrefix: '[xbs]',
      DescriptionMaxLength: 300,
      MenuContainerName: '[xbs] Menu',
      MobileContainerName: '[xbs] Mobile',
      OtherContainerName: '[xbs] Other',
      OtherContainerNameOld: '_other_',
      HorizontalSeparatorTitle: '────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────',
      ToolbarContainerName: '[xbs] Toolbar',
      ToolbarContainerNameOld: '_toolbar_',
      UnfiledContainerNameOld: '_xBrowserSync_',
      VerticalSeparatorTitle: '|'
    },
    CacheKeys: {
      Bookmarks: 'bookmarks',
      DisplayHelp: 'displayHelp',
      DisplayOtherSyncsWarning: 'displayOtherSyncsWarning',
      DisplayPermissions: 'displayPermissions',
      DisplayUpdated: 'displayUpdated',
      LastUpdated: 'lastUpdated',
      MobileAppVersion: 'mobileAppVersion',
      NetworkDisconnected: 'networkDisconnected',
      Password: 'password',
      ServiceUrl: 'serviceUrl',
      SyncBookmarksToolbar: 'syncBookmarksToolbar',
      SyncEnabled: 'syncEnabled',
      SyncId: 'syncId',
      SyncVersion: 'syncVersion',
      TraceLog: 'traceLog'
    },
    Commands: {
      SyncBookmarks: 1,
      RestoreBookmarks: 2,
      GetCurrentSync: 3,
      SyncFinished: 4,
      GetPageMetadata: 5,
      EnableEventListeners: 6,
      DisableEventListeners: 7
    },
    Constants: {
      Title: 'title',
      Description: 'description',
      Tooltip_NotSynced_Label: 'tooltip_NotSynced_Label',
      Tooltip_Synced_Label: 'tooltip_Synced_Label',
      Tooltip_Syncing_Label: 'tooltip_Syncing_Label',
      Login_GetSyncId_Title: 'login_GetSyncId_Title',
      Login_GetSyncId_Message: 'login_GetSyncId_Message',
      Help_Page_Welcome_Desktop_Content: 'help_Page_Welcome_Desktop_Content',
      Help_Page_Welcome_Android_Content: 'help_Page_Welcome_Android_Content',
      Help_Page_BeforeYouBegin_Chrome_Content: 'help_Page_BeforeYouBegin_Chrome_Content',
      Help_Page_BeforeYouBegin_Firefox_Content: 'help_Page_BeforeYouBegin_Firefox_Content',
      Help_Page_FirstSync_Desktop_Content: 'help_Page_FirstSync_Desktop_Content',
      Help_Page_FirstSync_Android_Content: 'help_Page_FirstSync_Android_Content',
      Help_Page_SyncId_Content: 'help_Page_SyncId_Content',
      Help_Page_ExistingId_Desktop_Content: 'help_Page_ExistingId_Desktop_Content',
      Help_Page_ExistingId_Android_Content: 'help_Page_ExistingId_Android_Content',
      Help_Page_Service_Content: 'help_Page_Service_Content',
      Help_Page_Searching_Desktop_Content: 'help_Page_Searching_Desktop_Content',
      Help_Page_Searching_Android_Content: 'help_Page_Searching_Android_Content',
      Help_Page_AddingBookmarks_Chrome_Content: 'help_Page_AddingBookmarks_Chrome_Content',
      Help_Page_AddingBookmarks_Firefox_Content: 'help_Page_AddingBookmarks_Firefox_Content',
      Help_Page_AddingBookmarks_Android_Content: 'help_Page_AddingBookmarks_Android_Content',
      Help_Page_NativeFeatures_Chrome_Content: 'help_Page_NativeFeatures_Chrome_Content',
      Help_Page_NativeFeatures_Firefox_Content: 'help_Page_NativeFeatures_Firefox_Content',
      Help_Page_BackingUp_Content: 'help_Page_BackingUp_Content',
      Help_Page_Shortcuts_Chrome_Content: 'help_Page_Shortcuts_Chrome_Content',
      Help_Page_Shortcuts_Firefox_Content: 'help_Page_Shortcuts_Firefox_Content',
      Help_Page_Mobile_Content: 'help_Page_Mobile_Content',
      Help_Page_Desktop_Content: 'help_Page_Desktop_Content',
      Help_Page_FurtherSupport_Content: 'help_Page_FurtherSupport_Content',
      Login_PasswordConfirmationField_Label: 'login_PasswordConfirmationField_Label',
      Login_PasswordField_Label: 'login_PasswordField_Label',
      Login_PasswordField_Existing_Description: 'login_PasswordField_Existing_Description',
      Login_PasswordField_New_Description: 'login_PasswordField_New_Description',
      Login_IdField_Label: 'login_IdField_Label',
      Login_IdField_Description: 'login_IdField_Description',
      Login_ConfirmSync_Title: 'login_ConfirmSync_Title',
      Login_ConfirmSync_Message: 'login_ConfirmSync_Message',
      Login_DisableOtherSyncs_Title: 'login_DisableOtherSyncs_Title',
      Login_DisableOtherSyncs_Message: 'login_DisableOtherSyncs_Message',
      Login_UpgradeSync_Title: 'login_UpgradeSync_Title',
      Login_UpgradeSync_Message: 'login_UpgradeSync_Message',
      Updated_Message: 'updated_Message',
      Updated_Title: 'updated_Title',
      Support_Title: 'support_Title',
      Support_Message: 'support_Message',
      Permissions_Message: 'permissions_Message',
      Permissions_Title: 'permissions_Title',
      Search_Field_Description: 'search_Field_Description',
      Search_NoBookmarks_Message: 'search_NoBookmarks_Message',
      Search_NoResults_Message: 'search_NoResults_Message',
      ShareBookmark_Message: 'shareBookmark_Message',
      BookmarkShared_Message: 'bookmarkShared_Message',
      Settings_Sync_SyncToolbarConfirmation_Message: 'settings_Sync_SyncToolbarConfirmation_Message',
      Settings_Sync_ConfirmCancelSync_Message: 'settings_Sync_ConfirmCancelSync_Message',
      Settings_Sync_Id_Description: 'settings_Sync_Id_Description',
      Settings_Sync_UpdatesAvailable_False_Message: 'settings_Sync_UpdatesAvailable_False_Message',
      Settings_Sync_UpdatesAvailable_True_Message: 'settings_Sync_UpdatesAvailable_True_Message',
      Settings_Sync_SyncToolbar_Label: 'settings_Sync_SyncToolbar_Label',
      Settings_Sync_SyncToolbar_Description: 'settings_Sync_SyncToolbar_Description',
      Settings_Service_ChangeService_Label: 'settings_Service_ChangeService_Label',
      Settings_Service_ChangeService_Description: 'settings_Service_ChangeService_Description',
      Settings_BackupRestore_Backup_Label: 'settings_BackupRestore_Backup_Label',
      Settings_BackupRestore_BackupLocal_Description: 'settings_BackupRestore_BackupLocal_Description',
      Settings_BackupRestore_BackupSynced_Description: 'settings_BackupRestore_BackupSynced_Description',
      Settings_BackupRestore_Restore_Label: 'settings_BackupRestore_Restore_Label',
      Settings_BackupRestore_RestoreLocal_Description: 'settings_BackupRestore_RestoreLocal_Description',
      Settings_BackupRestore_RestoreSynced_Description: 'settings_BackupRestore_RestoreSynced_Description',
      Settings_About_Title: 'settings_About_Title',
      Settings_About_AppVersion_Label: 'settings_About_AppVersion_Label',
      Settings_Issues_Help_Label: 'settings_Issues_Help_Label',
      Settings_Issues_Help_Description: 'settings_Issues_Help_Description',
      Settings_Issues_ViewFAQs_Label: 'settings_Issues_ViewFAQs_Label',
      Settings_Issues_Title: 'settings_Issues_Title',
      Settings_Issues_Tracker_Label: 'settings_Issues_Tracker_Label',
      Settings_Issues_Tracker_Description: 'settings_Issues_Tracker_Description',
      Settings_Issues_RaiseIssue_Label: 'settings_Issues_RaiseIssue_Label',
      Settings_Issues_Log_Label: 'settings_Issues_Log_Label',
      Settings_Issues_Log_Description: 'settings_Issues_Log_Description',
      Settings_Issues_ClearLog_Label: 'settings_Issues_ClearLog_Label',
      Settings_Issues_DownloadLog_Label: 'settings_Issues_DownloadLog_Label',
      Settings_Issues_LogDownloaded_Message: 'settings_Issues_LogDownloaded_Message',
      Settings_Issues_LogSize_Label: 'settings_Issues_LogSize_Label',
      Settings_Permissions_Title: 'settings_Permissions_Title',
      Settings_Permissions_ReadWebsiteData_Title: 'settings_Permissions_ReadWebsiteData_Title',
      Settings_Permissions_ReadWebsiteData_Description: 'settings_Permissions_ReadWebsiteData_Description',
      Settings_Permissions_ReadWebsiteData_Granted_Label: 'settings_Permissions_ReadWebsiteData_Granted_Label',
      Settings_Permissions_ReadWebsiteData_NotGranted_Label: 'settings_Permissions_ReadWebsiteData_NotGranted_Label',
      Settings_Service_Title: 'settings_Service_Title',
      Settings_Service_Status_NoNewSyncs: 'settings_Service_Status_NoNewSyncs',
      Settings_Service_Status_Error: 'settings_Service_Status_Error',
      Settings_Service_Status_Loading: 'settings_Service_Status_Loading',
      Settings_Service_Status_Online: 'settings_Service_Status_Online',
      Settings_Service_Status_Offline: 'settings_Service_Status_Offline',
      Settings_Service_UpdateForm_Message: 'settings_Service_UpdateForm_Message',
      Settings_Service_UpdateForm_Field_Description: 'settings_Service_UpdateForm_Field_Description',
      Settings_Service_UpdateForm_Confirm_Message: 'settings_Service_UpdateForm_Confirm_Message',
      Settings_Service_UpdateForm_Required_Label: 'settings_Service_UpdateForm_Required_Label',
      Settings_Service_UpdateForm_InvalidService_Label: 'settings_Service_UpdateForm_InvalidService_Label',
      Settings_Service_UpdateForm_RequestFailed_Label: 'settings_Service_UpdateForm_RequestFailed_Label',
      Settings_Service_UpdateForm_ServiceVersionNotSupported_Label: 'settings_Service_UpdateForm_ServiceVersionNotSupported_Label',
      Settings_BackupRestore_Title: 'settings_BackupRestore_Title',
      Settings_BackupRestore_NotAvailable_Message: 'settings_BackupRestore_NotAvailable_Message',
      Settings_BackupRestore_BackupSuccess_Message: 'settings_BackupRestore_BackupSuccess_Message',
      Settings_BackupRestore_RestoreSuccess_Message: 'settings_BackupRestore_RestoreSuccess_Message',
      Settings_BackupRestore_RestoreForm_Message: 'settings_BackupRestore_RestoreForm_Message',
      Settings_BackupRestore_RestoreForm_DataField_Label: 'settings_BackupRestore_RestoreForm_DataField_Label',
      Settings_BackupRestore_RestoreForm_Invalid_Label: 'settings_BackupRestore_RestoreForm_Invalid_Label',
      Settings_Sync_Title: 'settings_Sync_Title',
      Settings_Sync_NotAvailable_Message: 'settings_Sync_NotAvailable_Message',
      Settings_Sync_Id_Label: 'settings_Sync_Id_Label',
      Settings_Sync_DisplayQRCode_Message: 'settings_Sync_DisplayQRCode_Message',
      Settings_Service_DataUsage_Label: 'settings_Service_DataUsage_Label',
      Settings_Service_DataUsage_Description: 'settings_Service_DataUsage_Description',
      Settings_BackupRestore_ConfirmRestore_Sync_Message: 'settings_BackupRestore_ConfirmRestore_Sync_Message',
      Settings_BackupRestore_ConfirmRestore_NoSync_Message: 'settings_BackupRestore_ConfirmRestore_NoSync_Message',
      Bookmark_Title_Add: 'bookmark_Title_Add',
      Bookmark_Title_Edit: 'bookmark_Title_Edit',
      Bookmark_TitleField_Label: 'bookmark_TitleField_Label',
      Bookmark_UrlField_Label: 'bookmark_UrlField_Label',
      Bookmark_DescriptionField_Label: 'bookmark_DescriptionField_Label',
      Bookmark_TagsField_Label: 'bookmark_TagsField_Label',
      Bookmark_TagsField_Description: 'bookmark_TagsField_Description',
      Bookmark_BookmarkForm_Required_Label: 'bookmark_BookmarkForm_Required_Label',
      Bookmark_BookmarkForm_Exists_Label: 'bookmark_BookmarkForm_Exists_Label',
      Qr_Copied_Label: 'qr_Copied_Label',
      Qr_CopySyncId_Label: 'qr_CopySyncId_Label',
      Qr_Message: 'qr_Message',
      Working_Title: 'working_Title',
      ConnRestored_Title: 'connRestored_Title',
      ConnRestored_Message: 'connRestored_Message',
      Bookmark_Metadata_Message: 'bookmark_Metadata_Message',
      Button_Settings_Label: 'button_Settings_Label',
      Button_AddBookmark_Label: 'button_AddBookmark_Label',
      Button_DeleteBookmark_Label: 'button_DeleteBookmark_Label',
      Button_EditBookmark_Label: 'button_EditBookmark_Label',
      Button_ShareBookmark_Label: 'button_ShareBookmark_Label',
      Button_Help_Label: 'button_Help_Label',
      Button_Next_Label: 'button_Next_Label',
      Button_Previous_Label: 'button_Previous_Label',
      Button_Skip_Label: 'button_Skip_Label',
      Button_ScanCode_Label: 'button_ScanCode_Label',
      Button_DisableSync_Label: 'button_DisableSync_Label',
      Button_EnableSync_Label: 'button_EnableSync_Label',
      Button_ExistingSync_Label: 'button_ExistingSync_Label',
      Button_NewSync_Label: 'button_NewSync_Label',
      Button_SyncUpdates_Label: 'button_SyncUpdates_Label',
      Button_Confirm_Label: 'button_Confirm_Label',
      Button_Deny_Label: 'button_Deny_Label',
      Button_ReleaseNotes_Label: 'button_ReleaseNotes_Label',
      Button_Support_Label: 'button_Support_Label',
      Button_Cryptos_Label: 'button_Cryptos_Label',
      Button_Liberapay_Label: 'button_Liberapay_Label',
      Button_Patreon_Label: 'button_Patreon_Label',
      Button_AddTags_Label: 'button_AddTags_Label',
      Button_DeleteTag_Label: 'button_DeleteTag_Label',
      Button_Delete_Label: 'button_Delete_Label',
      Button_Share_Label: 'button_Share_Label',
      Button_ClearTags_Label: 'button_ClearTags_Label',
      Button_SelectBackupFile_Label: 'button_SelectBackupFile_Label',
      Button_RestoreData_Label: 'button_RestoreData_Label',
      Button_RestoreData_Invalid_Label: 'button_RestoreData_Invalid_Label',
      Button_RestoreData_Ready_Label: 'button_RestoreData_Ready_Label',
      Button_Backup_Label: 'button_Backup_Label',
      Button_Restore_Label: 'button_Restore_Label',
      Button_Saving_Label: 'button_Saving_Label',
      Button_Done_Label: 'button_Done_Label',
      Button_Clear_Label: 'button_Clear_Label',
      Button_Close_Label: 'button_Close_Label',
      Button_Continue_Label: 'button_Continue_Label',
      Button_Back_Label: 'button_Back_Label',
      Button_Update_Label: 'button_Update_Label',
      Button_Cancel_Label: 'button_Cancel_Label',
      Button_UpdateServiceUrl_Label: 'button_UpdateServiceUrl_Label',
      Button_Permissions_Remove_Label: 'button_Permissions_Remove_Label',
      Button_Permissions_Add_Label: 'button_Permissions_Add_Label',
      Error_Default_Title: 'error_Default_Title',
      Error_Default_Message: 'error_Default_Message',
      Error_HttpRequestFailed_Title: 'error_HttpRequestFailed_Title',
      Error_HttpRequestFailed_Message: 'error_HttpRequestFailed_Message',
      Error_HttpRequestFailedWhileUpdating_Title: 'error_HttpRequestFailedWhileUpdating_Title',
      Error_HttpRequestFailedWhileUpdating_Message: 'error_HttpRequestFailedWhileUpdating_Message',
      Error_TooManyRequests_Title: 'error_TooManyRequests_Title',
      Error_TooManyRequests_Message: 'error_TooManyRequests_Message',
      Error_RequestEntityTooLarge_Title: 'error_RequestEntityTooLarge_Title',
      Error_RequestEntityTooLarge_Message: 'error_RequestEntityTooLarge_Message',
      Error_NotAcceptingNewSyncs_Title: 'error_NotAcceptingNewSyncs_Title',
      Error_NotAcceptingNewSyncs_Message: 'error_NotAcceptingNewSyncs_Message',
      Error_DailyNewSyncLimitReached_Title: 'error_DailyNewSyncLimitReached_Title',
      Error_DailyNewSyncLimitReached_Message: 'error_DailyNewSyncLimitReached_Message',
      Error_MissingClientData_Title: 'error_MissingClientData_Title',
      Error_MissingClientData_Message: 'error_MissingClientData_Message',
      Error_InvalidCredentials_Title: 'error_InvalidCredentials_Title',
      Error_InvalidCredentials_Message: 'error_InvalidCredentials_Message',
      Error_SyncRemoved_Title: 'error_SyncRemoved_Title',
      Error_SyncRemoved_Message: 'error_SyncRemoved_Message',
      Error_NoDataToRestore_Title: 'error_NoDataToRestore_Title',
      Error_NoDataToRestore_Message: 'error_NoDataToRestore_Message',
      Error_LocalSyncError_Title: 'error_LocalSyncError_Title',
      Error_LocalSyncError_Message: 'error_LocalSyncError_Message',
      Error_OutOfSync_Title: 'error_OutOfSync_Title',
      Error_OutOfSync_Message: 'error_OutOfSync_Message',
      Error_ApiInvalid_Title: 'error_ApiInvalid_Title',
      Error_ApiInvalid_Message: 'error_ApiInvalid_Message',
      Error_ApiOffline_Title: 'error_ApiOffline_Title',
      Error_ApiOffline_Message: 'error_ApiOffline_Message',
      Error_ApiVersionNotSupported_Title: 'error_ApiVersionNotSupported_Title',
      Error_ApiVersionNotSupported_Message: 'error_ApiVersionNotSupported_Message',
      Error_ContainerChanged_Title: 'error_ContainerChanged_Title',
      Error_ContainerChanged_Message: 'error_ContainerChanged_Message',
      Error_LocalContainerNotFound_Title: 'error_LocalContainerNotFound_Title',
      Error_LocalContainerNotFound_Message: 'error_LocalContainerNotFound_Message',
      Error_FailedGetPageMetadata_Title: 'error_FailedGetPageMetadata_Title',
      Error_FailedGetPageMetadata_Message: 'error_FailedGetPageMetadata_Message',
      Error_SyncInterrupted_Title: 'error_SyncInterrupted_Title',
      Error_SyncInterrupted_Message: 'error_SyncInterrupted_Message',
      Error_ScanFailed_Title: 'error_ScanFailed_Title',
      Error_ShareFailed_Title: 'error_ShareFailed_Title',
      Error_FailedBackupData_Title: 'error_FailedBackupData_Title',
      Error_FailedGetDataToRestore_Title: 'error_FailedGetDataToRestore_Title',
      Error_FailedRestoreData_Title: 'error_FailedRestoreData_Title',
      Error_FailedRestoreData_Message: 'error_FailedRestoreData_Message',
      Error_FailedShareUrl_Title: 'error_FailedShareUrl_Title',
      Error_FailedShareUrlNotSynced_Title: 'error_FailedShareUrlNotSynced_Title'
    },
    ErrorCodes: {
      HttpRequestFailed: 10000,
      HttpRequestFailedWhileUpdating: 10001,
      HttpRequestCancelled: 10002,
      TooManyRequests: 10003,
      RequestEntityTooLarge: 10004,
      NotAcceptingNewSyncs: 10005,
      DailyNewSyncLimitReached: 10006,
      InvalidService: 10007,
      MissingClientData: 10100,
      AmbiguousSyncRequest: 10101,
      FailedGetLocalBookmarks: 10102,
      FailedCreateLocalBookmarks: 10103,
      FailedRemoveLocalBookmarks: 10104,
      FailedUpdateLocalBookmarks: 10105,
      NoDataFound: 10106,
      SyncRemoved: 10107,
      PasswordRemoved: 10108,
      InvalidCredentials: 10109,
      LocalBookmarkNotFound: 10110,
      XBookmarkNotFound: 10111,
      ContainerChanged: 10112,
      LocalContainerNotFound: 10113,
      DataOutOfSync: 10114,
      DuplicateBookmarkIdsDetected: 10115,
      ApiInvalid: 10200,
      ApiOffline: 10201,
      ApiVersionNotSupported: 10202,
      FailedGetPageMetadata: 10300,
      FailedSaveBackup: 10301,
      FailedScanID: 10302,
      FailedShareBookmark: 10303,
      FailedBackupData: 10304,
      FailedGetDataToRestore: 10305,
      FailedRestoreData: 10306,
      FailedShareUrl: 10400,
      FailedShareUrlNotSynced: 10401,
      FailedRegisterAutoUpdates: 10500,
      NotImplemented: 10600
    },
    LogType: {
      Trace: 0,
      Warn: 1,
      Error: 2
    },
    LookaheadMinChars: 1,
    MinApiVersion: '1.1.3',
    Platforms: {
      Android: 'android',
      Chrome: 'chrome',
      Firefox: 'firefox'
    },
    Regex: {
      Url: /(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
    },
    ReleaseNotesUrlStem: 'https://github.com/xbrowsersync/app/releases/tag/v',
    SyncPollTimeout: 2000,
    ServiceStatus: {
      Error: -1,
      Online: 1,
      Offline: 2,
      NoNewSyncs: 3
    },
    SyncType: {
      Push: 1,
      Pull: 2,
      Both: 3,
      Upgrade: 4
    },
    Title: 'xBrowserSync',
    UpdateType: {
      Create: 1,
      Delete: 2,
      Update: 3,
      Move: 4
    },
    URL: {
      Bookmarks: '/bookmarks',
      Current: '/current',
      DefaultServiceUrl: 'https://api.xbrowsersync.org',
      LastUpdated: '/lastUpdated',
      Version: '/version',
      ServiceInformation: '/info',
      Regex: '(\\w+://.)?(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]+\\.[a-z]+\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)',
      ProtocolRegex: '^[\\w\-]+:'
    }
  };

  return Global;
};