const interTitles = {
  titles: [
    {
      title: 'Campeonato Gaúcho',
      years: [1927, 1934, 1940, 1941, 1942, 1943, 1944, 1945, 1947, 1948, 1950, 1951, 1952, 1953, 1955, 1961, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1978, 1981, 1982, 1983, 1984, 1991, 1994, 1997, 2002, 2003, 2004, 2005, 2012, 2013, 2014, 2015]
    },
    {
      title: 'Copa do Brasil e Campeonato Gaúcho',
      years: 1992
    },
    {
      title: 'Copa Suruga Bank e Campeonato Gaúcho',
      years: 2009
    },
    {
      title: 'Cameponato Brasileiro e Campeonato Gaúcho',
      years: [1975, 1976]
    },
    {
      title: 'Cameponato Brasileiro',
      years: 1979
    },
    {
      title: 'Libertadores da América',
      years: 2010
    },
    {
      title: 'Libertadores da América e o Mundial de Clubes',
      years: 2006
    },
    {
      title: 'Recopa Gaúcha e Campeonato Gaúcho',
      years: 2016
    },
    {
      title: 'Recopa Gaúcha',
      years: 2017
    },
    {
      title: 'Copa Sul-Americana e Campeonato Gaúcho',
      years: 2008
    },
    {
      title: 'Recopa Sul-Americana',
      years: 2007
    },
    {
      title: 'Recopa Sul-Americana e Campeonado Gaúcho',
      years: 2011
    },
  ]
}

const getInterTitle = (year) => {
  document.querySelector('#result').innerHTML = '';

  if (isNaN(parseInt(year))) {
    throw new Error('Valor inesperado. Insira um número.');
  }

  for (let index = 0; index < interTitles.titles.length; index += 1) {
    if (interTitles.titles[index].years === parseInt(year)) {
      return interTitles.titles[index].title;
    } else {
      throw new Error(`No ano ${year} o Internacional não ganhou nenhum título`);
    }
  }
}

const addInterTitle = () => {
  try {
    const year = document.querySelector('#year-title').value;
    const result = document.querySelector('#result');
  
    result.innerHTML = `No ano ${year} o Internacional ganhou os(o) títulos(o) ${getInterTitle(year)}`;
    
  } catch (error) {
    result.innerHTML = error.message;
    
  } finally {
    document.querySelector('#year-title').value = '';
  }
  }

window.onload = () => {
  const button = document.querySelector('#btn-year');

  button.addEventListener('click', addInterTitle);
}

// module.exports = interTitles;