import '../styles/tokens-grid.css'

interface TokensGridProps {
  tokens: Record<string, string>
  hasRemValue?: boolean
  isSpaceValue?: boolean
}

export function TokensGrid({
  tokens,
  hasRemValue = false,
  isSpaceValue = false,
}: TokensGridProps) {
  return (
    <table className="tokens-grid">
      <thead>
        <tr>
          <th style={{ width: '100px' }}>Name</th>
          <th style={{ width: '100px' }}>Value</th>
          <th style={{ width: '100px' }}> {hasRemValue && <th>Pixels</th>} </th>
          <th> {isSpaceValue && <th>Size</th>} </th>
        </tr>
      </thead>

      <tbody>
        {Object.entries(tokens).map(([key, value]) => {
          return (
            <tr key={key}>
              <td style={{ width: '100px' }}>{key}</td>
              <td style={{ width: '100px' }}>{value}</td>
              {hasRemValue && (
                <td style={{ width: '100px' }}>
                  {' '}
                  {Number(value.replace('rem', '')) * 16}px{' '}
                </td>
              )}

              {isSpaceValue && (
                <td style={{ width: 'auto' }}>
                  <div
                    style={{
                      height: '4px',
                      padding: '0',
                      width: `${value}`,
                      background: 'cyan',
                    }}
                  ></div>
                </td>
              )}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
