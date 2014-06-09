module Jekyll
  module Round
    def round(input, precision=0)
      input.round(precision)
    end
  end
end

Liquid::Template.register_filter(Jekyll::Round)
