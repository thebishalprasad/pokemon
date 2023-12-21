import React from 'react';

function ExpandedContent({ pokemon, closeModal }) {
  if (!pokemon) {
    return null; // Add a check for null or undefined pokemon
  }

  const { name, image, weight, height, stats, baseStats } = pokemon;

  return (
    <div className="expanded-overlay normal visible">
      <button onClick={closeModal} className="close-button normal">
        X
      </button>
      <div className="expanded-left">
        <img className="expanded-image" src={image} alt={name} />
        <h3 className="expanded-name">{name}</h3>
      </div>
      <div className="expanded-right normal">
        <table className="expanded-table normal">
          <tbody>
            <tr>
              <td>
                <table>
                  <tbody>
                    <tr>
                      <td>Weight:</td>
                      <td>{weight}</td>
                    </tr>
                    <tr>
                      <td>Height:</td>
                      <td>{height}</td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td>
                <table>
                  <tbody>
                    {stats && stats.map((stat, index) => (
                      <tr key={index}>
                        <td>{`${stat.stat.name}:`}</td>
                        <td>{stat.base_stat}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </td>
              <td>
                <table>
                  <tbody>
                    {baseStats && baseStats.map((baseStat, index) => (
                      <tr key={index}>
                        <td>{`Bs${index + 1}:`}</td>
                        <td>{baseStat}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ExpandedContent;
