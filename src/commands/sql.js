export const sqlCommands = [
  {
    id: 'select',
    category: 'SQL',
    command: 'SELECT',
    description: 'データの取得',
    tags: ['クエリ', '取得'],
    examples: [
      {
        cmd: 'SELECT * FROM users WHERE age > 20',
        description: '20歳以上のユーザーを取得'
      }
    ]
  },
  {
    id: 'join',
    category: 'SQL',
    command: 'JOIN',
    description: 'テーブルの結合',
    tags: ['クエリ', '結合'],
    examples: [
      {
        cmd: 'SELECT * FROM orders JOIN users ON orders.user_id = users.id',
        description: '注文とユーザー情報を結合'
      }
    ]
  },
  {
    id: 'group-by',
    category: 'SQL',
    command: 'GROUP BY',
    description: 'グループ化と集計',
    tags: ['集計', 'グループ化'],
    examples: [
      {
        cmd: 'SELECT category, COUNT(*) FROM products GROUP BY category',
        description: 'カテゴリごとの商品数を集計'
      }
    ]
  },
  {
    id: 'index',
    category: 'SQL',
    command: 'CREATE INDEX',
    description: 'インデックスの作成',
    tags: ['インデックス', 'パフォーマンス'],
    examples: [
      {
        cmd: 'CREATE INDEX idx_email ON users(email)',
        description: 'メールアドレスにインデックスを作成'
      }
    ]
  },
  {
    id: 'update',
    category: 'SQL',
    command: 'UPDATE',
    description: 'データの更新',
    tags: ['更新', 'データ操作'],
    examples: [
      {
        cmd: 'UPDATE users SET status = "active" WHERE last_login > "2023-01-01"',
        description: '最近ログインしたユーザーのステータスを更新'
      }
    ]
  }
]
