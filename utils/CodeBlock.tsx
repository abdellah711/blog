import React from 'react'
import { SpecialComponents } from 'react-markdown/lib/ast-to-react'
import { NormalComponents } from 'react-markdown/lib/complex-types'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'

const CodeBlock: Partial<Omit<NormalComponents, keyof SpecialComponents> & SpecialComponents> = {
    code({ node, inline, className, children, ...props }) {
        const match = /language-(\w+)/.exec(className || '')

        return !inline && match ? (
            <SyntaxHighlighter
                style={dracula as any}
                language={match[1]}
                showLineNumbers
                PreTag="div" {...props}>
                {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>

        ) : (
            <code className={className} {...props}>
                {children}
            </code>
        )
    }
}

export default CodeBlock