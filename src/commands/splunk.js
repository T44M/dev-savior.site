export const splunkCommands = [
  {
    id: 'spl-search',
    category: 'SPL',
    command: 'search',
    description: 'ログの検索',
    tags: ['検索', 'クエリ'],
    examples: [
      {
        cmd: 'search error sourcetype=application',
        description: 'アプリケーションログからエラーを検索'
      }
    ]
  },
  {
    id: 'spl-stats',
    category: 'SPL',
    command: 'stats',
    description: '統計の計算',
    tags: ['集計', '分析'],
    examples: [
      {
        cmd: 'stats count BY host',
        description: 'ホストごとのイベント数を集計'
      }
    ]
  },
  {
    id: 'spl-timechart',
    category: 'SPL',
    command: 'timechart',
    description: '時系列データの集計',
    tags: ['時系列', '可視化'],
    examples: [
      {
        cmd: 'timechart span=1h count BY status',
        description: 'ステータスごとの1時間ごとの集計'
      }
    ]
  },
  {
    id: 'spl-transaction',
    category: 'SPL',
    command: 'transaction',
    description: 'イベントのグループ化',
    tags: ['グループ化', '分析'],
    examples: [
      {
        cmd: 'transaction userid maxspan=5m',
        description: 'ユーザーIDごとの5分以内のイベントをグループ化'
      }
    ]
  },
  {
    id: 'spl-eval',
    category: 'SPL',
    command: 'eval',
    description: 'フィールドの計算と作成',
    tags: ['計算', 'フィールド'],
    examples: [
      {
        cmd: 'eval response_time=end_time - start_time',
        description: 'レスポンスタイムを計算'
      }
    ]
  }
]
