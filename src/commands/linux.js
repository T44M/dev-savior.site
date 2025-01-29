export const linuxCommands = [
  {
    id: 'grep',
    category: 'Linux',
    command: 'grep',
    description: 'ファイル内の文字列検索',
    tags: ['検索', 'テキスト処理'],
    examples: [
      {
        cmd: 'grep -rin "pattern" .',
        description: '再帰的に検索（大文字小文字を区別）'
      },
      {
        cmd: 'grep -v "pattern" file',
        description: 'パターンにマッチしない行を表示'
      }
    ]
  },
  {
    id: 'find',
    category: 'Linux',
    command: 'find',
    description: 'ファイルやディレクトリの検索',
    tags: ['検索', 'ファイル操作'],
    examples: [
      {
        cmd: 'find . -name "*.js"',
        description: 'カレントディレクトリ以下のJSファイルを検索'
      },
      {
        cmd: 'find . -type d -empty',
        description: '空のディレクトリを検索'
      }
    ]
  },
  {
    id: 'sed',
    category: 'Linux',
    command: 'sed',
    description: 'テキストの置換や編集',
    tags: ['テキスト処理', '編集'],
    examples: [
      {
        cmd: "sed 's/old/new/g' file",
        description: 'ファイル内の文字列を置換'
      }
    ]
  },
  {
    id: 'awk',
    category: 'Linux',
    command: 'awk',
    description: 'テキスト処理と分析',
    tags: ['テキスト処理', '分析'],
    examples: [
      {
        cmd: "awk '{print $1}' file",
        description: '各行の1列目を表示'
      }
    ]
  },
  {
    id: 'tar',
    category: 'Linux',
    command: 'tar',
    description: 'ファイルのアーカイブ',
    tags: ['圧縮', 'アーカイブ'],
    examples: [
      {
        cmd: 'tar -czf archive.tar.gz dir/',
        description: 'ディレクトリをgzip圧縮'
      }
    ]
  }
]
