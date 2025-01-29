export const dockerCommands = [
  {
    id: 'docker-compose-up',
    category: 'Docker',
    command: 'docker compose up',
    description: 'コンテナの起動と作成',
    tags: ['コンテナ', '起動'],
    examples: [
      {
        cmd: 'docker compose up -d',
        description: 'バックグラウンドで起動'
      }
    ]
  },
  {
    id: 'docker-ps',
    category: 'Docker',
    command: 'docker ps',
    description: '実行中のコンテナ一覧',
    tags: ['コンテナ', '確認'],
    examples: [
      {
        cmd: 'docker ps -a',
        description: '全てのコンテナを表示'
      }
    ]
  },
  {
    id: 'docker-exec',
    category: 'Docker',
    command: 'docker exec',
    description: '実行中のコンテナでコマンド実行',
    tags: ['コンテナ', '実行'],
    examples: [
      {
        cmd: 'docker exec -it container bash',
        description: 'コンテナ内でシェルを起動'
      }
    ]
  },
  {
    id: 'docker-logs',
    category: 'Docker',
    command: 'docker logs',
    description: 'コンテナのログを表示',
    tags: ['ログ', '確認'],
    examples: [
      {
        cmd: 'docker logs -f container',
        description: 'リアルタイムでログを追跡'
      }
    ]
  },
  {
    id: 'docker-build',
    category: 'Docker',
    command: 'docker build',
    description: 'Dockerイメージのビルド',
    tags: ['イメージ', 'ビルド'],
    examples: [
      {
        cmd: 'docker build -t myapp .',
        description: 'カレントディレクトリからイメージを作成'
      }
    ]
  }
]
