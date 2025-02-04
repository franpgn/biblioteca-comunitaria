# Biblioteca Comunitária
Aplicação web para gestão de livros de uma biblioteca com catálogo do google books

---

# Fluxo de Branches no GitHub

Este documento explica como utilizar as branches de forma adequada no projeto, seguindo boas práticas para organização e colaboração.

---

## 📋 Visão Geral
- **Não faça commits diretamente na branch `main`** (ela representa a versão estável em produção).
- **Não interaja com a branch `develop`** (o time de projetos cuidará dela).
- **Crie branches específicas** para cada tipo de tarefa:
  - `feature/`: Novas funcionalidades
  - `bugfix/`: Correções de bugs não urgentes
  - `hotfix/`: Correções críticas em produção

---

## 🌿 Tipos de Branches

### 1. `feature/`
- **Quando usar**: Para desenvolver novas funcionalidades.
- **Nome da branch**: `feature/nome-da-feature`  
  Exemplo: `feature/login-com-google`

### 2. `bugfix/`
- **Quando usar**: Para corrigir bugs identificados em ambiente de teste.
- **Nome da branch**: `bugfix/descricao-breve`  
  Exemplo: `bugfix/corrigir-erro-de-carregamento`

### 3. `hotfix/`
- **Quando usar**: Para corrigir problemas críticos em produção.
- **Nome da branch**: `hotfix/descricao-urgente`  
  Exemplo: `hotfix/corrigir-falha-de-seguranca`

---

## 🔄 Fluxo de Trabalho

1. **Crie uma branch** a partir da `main`:
   ```bash
   git checkout main
   git pull origin main
   git checkout -b tipo/nome-da-branch


2. **Trabalhe na sua branch:**

Faça commits pequenos e descritivos

Mantenha o foco no propósito da branch

3. **Envie para o repositório remoto:**
   ```bash
   git push origin tipo/nome-da-branch

4. **Abra um Pull Request (PR):**

Direcione o PR para a branch main

Descreva claramente as mudanças no PR

5. **Após aprovação:**

O time de projetos fará o merge na main

A branch será excluída após o merge

---

## ✅ **Boas Práticas**
Mantenha as branches curtas e focadas (1 branch = 1 objetivo)

Teste suas alterações localmente antes de abrir um PR

Use nomes claros nas branches e PRs

Mantenha sua branch atualizada com a `main`:
  ```bash
   git push origin tipo/nome-da-branch
  ```
---

## ❗ **Importante**
Não faça merge manualmente na main ou develop

Não trabalhe diretamente na main

Não crie branches genéricas (ex: minhas-alteracoes)

O time de projetos será responsável por:

Fazer o merge das branches aprovadas na main

Gerenciar a sincronização com a develop

Lidar com conflitos e versionamento

---

## **Sempre pergunte para um membro do time de projetos se houver dúvida, não faça nenhum commit ou pull request sem 100% de certeza do que está fazendo!!**

---

## **Esboço das Interfaces:**

![image](https://github.com/user-attachments/assets/86b94758-2136-4a54-b430-753e50220eaf)
