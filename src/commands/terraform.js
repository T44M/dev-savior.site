export const terraformCommands = [
  {
    id: 'tf-init',
    category: 'Terraform',
    command: 'terraform init',
    description: 'Terraformの初期化',
    tags: ['初期化', 'セットアップ'],
    examples: [
      {
        cmd: 'terraform init -upgrade',
        description: 'プロバイダーを最新版に更新'
      }
    ]
  },
  {
    id: 'tf-plan',
    category: 'Terraform',
    command: 'terraform plan',
    description: '実行計画の確認',
    tags: ['計画', '確認'],
    examples: [
      {
        cmd: 'terraform plan -out=tfplan',
        description: '実行計画をファイルに保存'
      }
    ]
  },
  {
    id: 'tf-apply',
    category: 'Terraform',
    command: 'terraform apply',
    description: 'インフラの作成・更新',
    tags: ['適用', '実行'],
    examples: [
      {
        cmd: 'terraform apply -auto-approve',
        description: '確認なしで実行'
      }
    ]
  },
  {
    id: 'tf-destroy',
    category: 'Terraform',
    command: 'terraform destroy',
    description: 'インフラの削除',
    tags: ['削除', '実行'],
    examples: [
      {
        cmd: 'terraform destroy -target=aws_instance.example',
        description: '特定のリソースのみ削除'
      }
    ]
  },
  {
    id: 'tf-workspace',
    category: 'Terraform',
    command: 'terraform workspace',
    description: 'ワークスペースの管理',
    tags: ['環境', '管理'],
    examples: [
      {
        cmd: 'terraform workspace new dev',
        description: '新しい開発環境を作成'
      }
    ]
  }
]
